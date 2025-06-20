import fondo from '../../assets/fondo.png'
import { useState } from 'react'
import { notifySuccessAdd, notifyMissingFields } from '../../pages/notification/notification'

const initialState = {
    name: '',
    phone: '',
    email: '',
    asunto: '',
    message: ''
}

const Contact = () => {
    const [contact, setContact] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setContact(prev => ({ ...prev, [name]: value }))
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                notifySuccessAdd(`Mensaje Enviado correctamente`)
                setContact(initialState);
            } else {
                const errorData = await response.json();
                console.error('Error en el servidor:', errorData);
                notifyMissingFields(`Hubo un error al enviar el mensaje`)
            }
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
        }
    };

    return (
        <div
            className="min-h-screen w-full px-4 md:px-16 py-24 flex items-center justify-center bg-cover bg-center "
            style={{ backgroundImage: `url(${fondo})` }}
        >
            <div className="bg-white/20 backdrop-blur-lg p-8 md:p-14 rounded-2xl shadow-xl w-full max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 tracking-wide text-[#40250D]">Contáctenos</h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleOnSubmit}>
                    <div className="flex flex-col">
                        <label className="mb-1 text-[#40250D] text-sm ">Nombre completo</label>
                        <input
                            type="text"
                            name='name'
                            value={contact.name}
                            onChange={handleChange}
                            placeholder="Escriba su nombre"
                            className="bg-white/70 text-sm px-4 py-2 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#401809] transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-[#40250D] text-sm">Teléfono</label>
                        <input
                            type="tel"
                            name='phone'
                            value={contact.phone}
                            onChange={handleChange}
                            placeholder="Ej: +54 3415555555"
                            className="bg-white/70 text-sm px-4 py-2 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#401809] transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-[#40250D] text-sm">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={contact.email}
                            onChange={handleChange}
                            placeholder="ejemplo@correo.com"
                            className="bg-white/70 text-sm px-4 py-2 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#401809] transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-[#40250D] text-sm">Asunto</label>
                        <input
                            type="text"
                            name='asunto'
                            value={contact.asunto}
                            onChange={handleChange}
                            placeholder="Motivo del mensaje"
                            className="bg-white/70 text-sm px-4 py-2 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#401809] transition"
                        />
                    </div>

                    <div className="md:col-span-2 flex flex-col">
                        <label className="mb-1 text-[#40250D] text-sm">Mensaje</label>
                        <textarea
                            placeholder="Escriba su mensaje"
                            name='message'
                            value={contact.message}
                            onChange={handleChange}
                            rows="5"
                            className="bg-white/70 text-sm px-4 py-2 rounded-xl border border-white/30 resize-none focus:outline-none focus:ring-2 focus:ring-[#401809] transition"
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 flex justify-center mt-4">
                        <button
                            type="submit"
                            className="bg-[#401809] text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-[#2e1206] transition"
                        >
                            ENVIAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
