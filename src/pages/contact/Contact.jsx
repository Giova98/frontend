import fondo from '../../assets/fondo.png'

const Contact = () => {
  return (

    <div 
      className="min-h-screen w-full p-[200px] flex items-center justify-center bg-cover bg-center text-2xl" 
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="bg-white/20 backdrop-blur-sm p-10 rounded shadow-lg min-w-[300px] max-w-[1200px] w-full">
        <h2 className="text-4xl font-bold text-center mb-8">Contáctenos</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Nombre completo</label>
            <input
              type="text"
              placeholder="Escriba su nombre"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#401809]"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Teléfono</label>
            <input
              type="tel"
              placeholder="Ej: +54 3415555555"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#401809]"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#401809]"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Asunto</label>
            <input
              type="text"
              placeholder="Motivo del mensaje"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#401809]"
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="mb-1 font-medium">Mensaje</label>
            <textarea
              placeholder="Escriba su mensaje"
              rows="5"
              className="border border-gray-300 p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#401809]"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
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
