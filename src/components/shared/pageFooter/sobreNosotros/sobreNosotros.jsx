import React from "react";
import foto_Gio from '../../../../assets/foto_Gio.jpg'
import foto_Marcos from '../../../../assets/foto_Marcos.png'
import foto_Piero from '../../../../assets/foto_Piero.png'

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" id="quienes-somos">Vivimos por la música</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              En CarpiChords, creemos que cada instrumento musical tiene una historia que contar y un nuevo dueño que espera. Somos el puente entre músicos que buscan darle una segunda vida a sus instrumentos y aquellos que buscan su compañero musical perfecto.
            </p>
            <p className="mb-4">
              Nuestra plataforma está diseñada por músicos, para músicos. Entendemos la emoción de encontrar ese instrumento especial y la importancia de que llegue a manos adecuadas. Cada guitarra, piano, violín o batería en nuestro marketplace ha sido cuidadosamente seleccionado para garantizar calidad y autenticidad.
            </p>
          </div>
          <div>
            <p className="mb-4">
              Más que un marketplace, somos una comunidad apasionada por la música. Ofrecemos imagenes de los instrumentos muy detallados para que puedas visualizarlos de la mejor manera, consejos de expertos para mantener tu equipo en perfecto estado, y un sistema seguro para que tus transacciones sean tan fluidas como una melodía bien ejecutada.
            </p>
            <p className="mb-4">
              Ya seas un profesional buscando equipo de estudio, un coleccionista en busca de piezas únicas, o un principiante dando sus primeros pasos, en CarpiChords encontrarás exactamente lo que necesitas para hacer sonar tu música.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-t border-b border-gray-200 py-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">2015</h3>
          <p className="text-gray-600">Fundación de CarpiChords</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">50k+</h3>
          <p className="text-gray-600">Instrumentos vendidos</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">120k</h3>
          <p className="text-gray-600">Músicos registrados</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">4.9/5</h3>
          <p className="text-gray-600">Valoración de usuarios</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6" id="nuestro-valores">Nuestros valores</h2>
        <p className="mb-8 max-w-2xl">
          En CarpiChords, cada nota cuenta. Estos son los principios que guían nuestra armonía diaria.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Pasión por la música.</h3>
              <p className="text-gray-600">Vivimos y respiramos música. Cada instrumento en nuestra plataforma es tratado con el respeto que merece.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Transparencia.</h3>
              <p className="text-gray-600">Información clara, fotos detalladas y descripciones honestas para que compres con confianza.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Comunidad.</h3>
              <p className="text-gray-600">Conectamos músicos, facilitamos encuentros y creamos oportunidades para crecer juntos.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Excelencia musical.</h3>
              <p className="text-gray-600">Solo aceptamos instrumentos que cumplan nuestros estándares de calidad para músicos exigentes.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Innovación constante.</h3>
              <p className="text-gray-600">Implementamos las últimas tecnologías para hacer tu experiencia de compraventa más fácil y segura.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Sostenibilidad.</h3>
              <p className="text-gray-600">Promovemos la economía circular dando segundas oportunidades a instrumentos con mucho por aportar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16" id="nuestro-equipo">
        <h2 className="text-3xl font-bold mb-6">Nuestro equipo</h2>
        <p className="mb-8 max-w-3xl">
          Tres programadores full stack apasionados por la música y la tecnología, creando la mejor plataforma para compra y venta de instrumentos musicales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Tu perfil */}
          <div className="bg-[#40250D] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-[#60250D] flex items-center justify-center">
              {/* Reemplaza con tu foto */}
              <img
                src={foto_Gio}
                alt="Tu nombre"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-[#FFD8A9]">Giovani Luciano Seta</h3>
              <p className="text-white font-medium mb-2">Full Stack Developer</p>
              <p className="text-white mb-4">Especializado en Web & Mobile App</p>
              <div className="flex items-center">
                <span className="text-sm text-gray-300 mr-2">También toca:</span>
                <span className="text-[#FFD8A9] font-medium">Guitarra y bajo</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Compañero 1 */}
          <div className="bg-[#40250D] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-[#60250D] flex items-center justify-center">
              <img
                src={foto_Piero}
                alt="Compañero 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-[#FFD8A9]">Alessandro Gonzales</h3>
              <p className="text-white font-medium mb-2">Full Stack Developer</p>
              <p className="text-white mb-4">Especializado en Web & Mobile App</p>
              <div className="flex items-center">
                <span className="text-sm text-gray-300 mr-2">También toca:</span>
                <span className="text-[#FFD8A9] font-medium">Guitarra y voz</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Compañero 2 */}
          <div className="bg-[#40250D] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-[#60250D] flex items-center justify-center">
              <img
                src={foto_Marcos}
                alt="Compañero 2"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-[#FFD8A9]">Marcos Galarza</h3>
              <p className="text-white font-medium mb-2">Full Stack Developer</p>
              <p className="text-white mb-4">Especializado en Web & Mobile App</p>
              <div className="flex items-center">
                <span className="text-sm text-gray-300 mr-2">También toca:</span>
                <span className="text-[#FFD8A9] font-medium">Ningun instrumento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section id="sumate-equipo">
        <h2 className="text-3xl font-bold mb-6">Únete como vendedor</h2>
        <p className="mb-8 max-w-2xl">
          ¿Tienes instrumentos musicales que quieras vender o quieres convertirte en vendedor profesional en nuestra plataforma? Únete a nuestra comunidad de vendedores verificados.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-4">Vendedor Individual</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-[#FFD8A9]">•</span>
                <span>Vende tus propios instrumentos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#FFD8A9]">•</span>
                <span>Comisión baja por venta</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#FFD8A9]">•</span>
                <span>Herramientas fáciles de gestión</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-4">Vendedor Profesional</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-[#FFD8A9]">•</span>
                <span>Tienda virtual personalizada</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#FFD8A9]">•</span>
                <span>Tarifas preferenciales</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#FFD8A9]">•</span>
                <span>Soporte prioritario</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-4">Talleres y Luthiers</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-[#FFD8A9]">•</span>
                <span>Exhibe tus trabajos personalizados</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#FFD8A9]">•</span>
                <span>Conecta con clientes directos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#FFD8A9]">•</span>
                <span>Programa de reparaciones</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-[#40250D] text-white px-6 py-3 rounded-lg hover:bg-[#60250D] transition-colors font-medium">
            Regístrate como vendedor
          </button>
        </div>
      </section>
    </div>
  );
};

// Team members data
const teamMembers = [
  { name: "Carlos Pérez", position: "CEO & Fundador", instrument: "Guitarra/Piano" },
  { name: "María Rodríguez", position: "Directora Musical", instrument: "Violín" },
  { name: "David Fernández", position: "CTO", instrument: "Batería" },
  { name: "Laura Gómez", position: "Directora de Marketing", instrument: "Voz" },
  { name: "Javier López", position: "Experto en Guitarras", instrument: "Guitarra eléctrica" },
  { name: "Ana Martínez", position: "Directora de Comunidad", instrument: "Bajo" },
  { name: "Pablo Sánchez", position: "Desarrollador Senior", instrument: "Teclados" },
  { name: "Sofía Martín", position: "Diseñadora UX", instrument: "Flauta" },
];

export default AboutUs;