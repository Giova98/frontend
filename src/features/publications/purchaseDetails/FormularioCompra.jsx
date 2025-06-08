import { useEffect, useState } from "react";
import { useAuth } from '../../../services/auth/AuthContext';

const FormularioCompra = ({ onChange }) => {
    const [provincias, setProvincias] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [form, setForm] = useState(null);

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            setForm({
                ID_Buyer: user.id,
                nombre: '',
                email: '',
                telefono: '',
                pais: '',
                provincia: '',
                provinciaId: '',
                ciudad: '',
                ciudadId: '',
                cp: '',
                calle: '',
                dpto: ''
            });
        }
    }, [user]);

    useEffect(() => {
        const fetchProvincias = async () => {
            try {
                const res = await fetch('http://localhost:3000/provincias-ciudades');
                const data = await res.json();
                setProvincias(data);
            } catch (error) {
                console.error("Error cargando provincias", error);
            }
        };
        fetchProvincias();
    }, []);

    useEffect(() => {
        if (!form || !form.provinciaId) return;
        const fetchCiudades = async () => {
            try {
                const res = await fetch(`http://localhost:3000/ciudades/${form.provinciaId}`);
                const data = await res.json();
                setCiudades(data);
            } catch (error) {
                console.error("Error cargando ciudades", error);
            }
        };
        fetchCiudades();
    }, [form?.provinciaId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedForm = { ...form, [name]: value };

        if (name === 'provinciaId') {
            const provinciaSeleccionada = provincias.find(p => p.ID_Province === parseInt(value));
            updatedForm.provinciaId = value;
            updatedForm.provincia = provinciaSeleccionada?.Name || '';
            updatedForm.ciudadId = '';
            updatedForm.ciudad = '';
        }

        if (name === 'ciudadId') {
            const ciudadSeleccionada = ciudades.find(c => c.ID_City === parseInt(value));
            updatedForm.ciudadId = value;
            updatedForm.ciudad = ciudadSeleccionada?.Name || '';
        }

        setForm(updatedForm);
        onChange(updatedForm);
    };

    // ✅ Mostrar un loader mientras no se carga el form
    if (!form) return <div>Cargando formulario...</div>;

    return (
        <div className="space-y-4">
            <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" className="w-full p-2 rounded border" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-2 rounded border" required />
            <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" className="w-full p-2 rounded border" required />
            <input name="pais" value={form.pais} onChange={handleChange} placeholder="País" className="w-full p-2 rounded border" required />

            <select name="provinciaId" value={form.provinciaId} onChange={handleChange} className="w-full p-2 rounded border" required>
                <option value="">Seleccioná una provincia</option>
                {provincias.map(p => (
                    <option key={p.ID_Province} value={p.ID_Province}>{p.Name}</option>
                ))}
            </select>

            <select name="ciudadId" value={form.ciudadId} onChange={handleChange} className="w-full p-2 rounded border" required>
                <option value="">Seleccioná una ciudad</option>
                {ciudades.map(c => (
                    <option key={c.ID_City} value={c.ID_City}>{c.Name}</option>
                ))}
            </select>

            <input name="cp" value={form.cp} onChange={handleChange} placeholder="Código Postal" className="w-full p-2 rounded border" required />
            <input name="calle" value={form.calle} onChange={handleChange} placeholder="Calle y número" className="w-full p-2 rounded border" required />
            <input name="dpto" value={form.dpto} onChange={handleChange} placeholder="Departamento (opcional)" className="w-full p-2 rounded border" />
        </div>
    );
};

export default FormularioCompra;
