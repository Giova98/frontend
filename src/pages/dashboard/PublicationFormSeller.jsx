import { useState } from "react";
import { notifySuccessAdd, notifyMissingFields } from '../notification/notification';

const initialState = {
    name: "",
    brand: "",
    price: "",
    condition: "",
    category: "",
    description: "",
    image: "",
};

const PublicationFormSeller = () => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" })); // limpia el error al escribir
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "El nombre del instrumento es obligatorio.";
        if (!formData.brand.trim()) newErrors.brand = "La marca es obligatoria.";
        if (!formData.price || isNaN(formData.price)) newErrors.price = "El precio debe ser un número válido.";
        if (!formData.condition) newErrors.condition = "Selecciona la condición del instrumento.";
        if (!formData.category) newErrors.category = "Selecciona la categoría.";
        if (!formData.description.trim()) newErrors.description = "La descripción es obligatoria.";
        if (!formData.image.trim()) newErrors.image = "La URL de la imagen es obligatoria.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            notifyMissingFields(`¡Completo los campos requeridos!`)
            return;
        }
        notifySuccessAdd(`¡${formData.name} publicada con exito!`);

        // Limpia el formulario tras enviar
        setFormData(initialState);
    };

    return (
        <div style={{
            maxWidth: "700px",
            margin: "2rem auto",
            padding: "2rem",
            paddingTop: '10px',
            borderRadius: "12px",
            backgroundColor: '#FDE7B9',
            border: '2px solid brown',
        }}>
            <h2 style={{ textAlign: "center", marginBottom: "2.9rem", fontSize: '26px' }}>Publicar Instrumento Musical</h2>
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <label>
                    Nombre del instrumento:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle(errors.name)}
                    />
                    {errors.name && <span style={errorStyle}>{errors.name}</span>}
                </label>

                <label>
                    Marca:
                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        style={inputStyle(errors.brand)}
                    />
                    {errors.brand && <span style={errorStyle}>{errors.brand}</span>}
                </label>

                <label>
                    Precio:
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        style={inputStyle(errors.price)}
                    />
                    {errors.price && <span style={errorStyle}>{errors.price}</span>}
                </label>

                <label>
                    Condición:
                    <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        style={inputStyle(errors.condition)}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="Nuevo">Nuevo</option>
                        <option value="Usado">Usado</option>
                        <option value="Reacondicionado">Reacondicionado</option>
                    </select>
                    {errors.condition && <span style={errorStyle}>{errors.condition}</span>}
                </label>

                <label>
                    Categoría:
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        style={inputStyle(errors.category)}
                    >
                        <option value="">Seleccione una categoría</option>
                        <option value="Cuerda">Cuerda</option>
                        <option value="Viento">Viento</option>
                        <option value="Percusión">Percusión</option>
                        <option value="Teclado">Teclado</option>
                        <option value="Otros">Otros</option>
                    </select>
                    {errors.category && <span style={errorStyle}>{errors.category}</span>}
                </label>

                <label>
                    Descripción:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        style={inputStyle(errors.description)}
                    />
                    {errors.description && <span style={errorStyle}>{errors.description}</span>}
                </label>

                <label>
                    URL de la imagen:
                    <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        style={inputStyle(errors.image)}
                    />
                    {errors.image && <span style={errorStyle}>{errors.image}</span>}
                </label>

                <button
                    type="submit"
                    style={{
                        backgroundColor: "#59382C",
                        color: "#fff",
                        padding: "0.75rem",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}
                >
                    Publicar
                </button>
            </form>
        </div>
    );
};

const inputStyle = (hasError) => ({
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: hasError ? "2px solid red" : "1px solid #ccc",
    marginTop: "0.5rem",
    boxSizing: "border-box"
});

const errorStyle = {
    color: "red",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
    display: "block"
};

export default PublicationFormSeller;
