import React, { useState } from 'react';

const TermsAndConditions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Datos de ejemplo para las secciones de términos
  const sections = [
    {
      id: 1,
      title: "Uso de la Plataforma",
      content: "CarpiChords es un marketplace especializado en instrumentos musicales donde usuarios pueden comprar y vender instrumentos y accesorios. Al utilizar nuestro sitio, aceptas cumplir con estas condiciones y nuestras políticas de privacidad.",
      lastUpdated: "Actualizado: 9 de mayo, 2025"
    },
    {
      id: 2,
      title: "Política de Transacciones",
      content: "Todas las transacciones realizadas a través de CarpiChords están sujetas a verificación. Nos reservamos el derecho de cancelar cualquier transacción que no cumpla con nuestros términos. Los precios son establecidos por los vendedores y pueden incluir comisiones de servicio.",
      lastUpdated: "Actualizado: 9 de mayo, 2025"
    },
    {
      id: 3,
      title: "Devoluciones y Reembolsos",
      content: "Los compradores tienen 7 días hábiles para solicitar devoluciones si el producto no coincide con la descripción. Los instrumentos deben devolverse en su estado original. Los gastos de envío en devoluciones no autorizadas corren por cuenta del comprador.",
      lastUpdated: "Actualizado: 9 de mayo, 2025"
    },
    {
      id: 4,
      title: "Propiedad Intelectual",
      content: "Todos los contenidos de CarpiChords, incluyendo logos, diseños y textos, son propiedad exclusiva de Facu-Code-Team™. Queda prohibida su reproducción sin autorización expresa.",
      lastUpdated: "Actualizado: 9 de mayo, 2025"
    },
    {
      id: 5,
      title: "Política de Privacidad",
      content: "Protegemos los datos personales de nuestros usuarios según las leyes vigentes. La información proporcionada se utiliza únicamente para facilitar transacciones y mejorar la experiencia en nuestra plataforma.",
      lastUpdated: "Actualizado: 9 de mayo, 2025"
    },
    {
      id: 6,
      title: "Responsabilidad del Vendedor",
      content: "Los vendedores son responsables de la exactitud de las descripciones de los productos, el estado real del instrumento y el cumplimiento de los plazos de envío acordados. CarpiChords actúa únicamente como intermediario.",
      lastUpdated: "Actualizado: 9 de mayo, 2025"
    }
  ];

  // Filtrar secciones basadas en el término de búsqueda
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Términos y condiciones de uso del sitio</h1>
        <p className="text-lg text-gray-600">Versión vigente: 9 de mayo, 2025</p>
      </div>

      {/* Resumen */}
      <div className="bg-[#FDE7B9] p-6 rounded-lg mb-12">
        <h2 className="text-xl font-bold mb-4">Resumen de términos y condiciones</h2>
        <p className="mb-4">
          CarpiChords es una plataforma especializada donde músicos y amantes de la música pueden encontrar una amplia variedad de instrumentos y accesorios musicales.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>El Marketplace es una plataforma donde los usuarios pueden vender y comprar instrumentos musicales usando distintas soluciones de pago y envío.</li>
          <li>Conectamos a músicos interesados en comprar instrumentos con vendedores calificados.</li>
          <li>Ofrecemos herramientas seguras para transacciones tanto dentro como fuera de la plataforma.</li>
          <li>Proporcionamos soluciones logísticas para el envío seguro de instrumentos musicales.</li>
        </ul>
      </div>

      {/* Buscador */}
      <div className="mb-12">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Buscar en términos y condiciones..."
            className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute right-3 top-3 h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Resultados de búsqueda o todas las secciones */}
      {filteredSections.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No se encontraron resultados para "{searchTerm}"</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredSections.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.content}</p>
                <p className="text-sm text-gray-500">{section.lastUpdated}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Aceptación de términos */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">Al usar nuestro sitio, aceptas nuestros Términos y Condiciones</p>
          <button className="bg-[#40250D] hover:bg-[#60250D] text-white px-6 py-3 rounded-lg transition-colors">
            Descargar PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;