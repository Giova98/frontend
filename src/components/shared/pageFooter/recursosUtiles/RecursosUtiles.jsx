import React, { useState } from 'react';
import { Search, Download, ChevronRight } from 'lucide-react';

const HelpResources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Categorías y recursos
  const resourceCategories = [
    {
      id: 1,
      title: "Guía para comprar instrumentos",
      link: "guia-comprar",
      resources: [
        {
          id: 101,
          title: "Cómo evaluar el estado de un instrumento usado",
          description: "Aprende a identificar señales de desgaste, daños y el verdadero valor de instrumentos de segunda mano.",
          link: "#",
          type: "PDF",
          size: "2.4 MB"
        },
        {
          id: 102,
          title: "Preguntas clave antes de comprar",
          description: "Lista de preguntas esenciales que todo comprador debería hacer al vendedor.",
          link: "#",
          type: "Artículo",
          size: "5 min lectura"
        },
        {
          id: 103,
          title: "Guía de precios de mercado",
          description: "Tabla de referencia con valores aproximados para diferentes tipos de instrumentos según su condición.",
          link: "#",
          type: "PDF",
          size: "1.8 MB"
        }
      ]
    },
    {
      id: 2,
      title: "Guía para vender tus productos",
      resources: [
        {
          id: 201,
          title: "Cómo tomar fotos profesionales de tus instrumentos",
          description: "Técnicas para mostrar tus instrumentos de la mejor manera y aumentar las ventas.",
          link: "#",
          type: "Video",
          size: "8 min"
        },
        {
          id: 202,
          title: "Redacción de descripciones efectivas",
          description: "Estructura y palabras clave para crear descripciones que atraigan compradores.",
          link: "#",
          type: "PDF",
          size: "1.2 MB"
        },
        {
          id: 203,
          title: "Estrategias de precios competitivos",
          description: "Cómo fijar precios que sean atractivos para compradores y justos para ti.",
          link: "#",
          type: "Artículo",
          size: "7 min lectura"
        }
      ]
    },
    {
      id: 3,
      title: "Comparativa de marcas y modelos",
      resources: [
        {
          id: 301,
          title: "Guía de guitarras acústicas: Principales marcas",
          description: "Comparativa detallada entre Martin, Taylor, Yamaha y otras marcas líderes.",
          link: "#",
          type: "PDF",
          size: "3.5 MB"
        },
        {
          id: 302,
          title: "Pianos digitales: Modelos recomendados por nivel",
          description: "Análisis de los mejores pianos digitales para principiantes, intermedios y profesionales.",
          link: "#",
          type: "Artículo",
          size: "10 min lectura"
        },
        {
          id: 303,
          title: "Micrófonos para estudio: Comparativa técnica",
          description: "Especificaciones y usos recomendados para diferentes modelos de micrófonos.",
          link: "#",
          type: "PDF",
          size: "2.9 MB"
        }
      ]
    }
  ];

  // Filtrar recursos basados en el término de búsqueda
  const filteredResources = resourceCategories.map(category => ({
    ...category,
    resources: category.resources.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.resources.length > 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo podemos ayudarte?</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Estas son algunas de las guías y recursos más solicitados. Si no encuentras lo que necesitas, contáctanos por teléfono, chat o email.
        </p>
      </div>

      {/* Buscador */}
      <div className="mb-12">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Escribe palabras clave para encontrar respuestas..."
            className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <p className="text-center text-gray-500 mt-2">
          También puedes explorar los temas a continuación para encontrar lo que buscas.
        </p>
      </div>

      {/* Resultados de búsqueda o categorías */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No se encontraron resultados para "{searchTerm}"</p>
          <button 
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            onClick={() => setSearchTerm('')}
          >
            Mostrar todos los recursos
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredResources.map((category) => (
            <div key={category.id} className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource) => (
                  <div key={resource.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6 h-full flex flex-col">
                      <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{resource.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {resource.type} • {resource.size}
                        </span>
                        <a 
                          href={resource.link} 
                          className="text-black-600 hover:text-blue-800 flex items-center"
                        >
                          {resource.type === 'PDF' ? (
                            <>
                              <Download className="mr-1 h-4 w-4" /> Descargar
                            </>
                          ) : (
                            <>
                              Ver más <ChevronRight className="ml-1 h-4 w-4" />
                            </>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a href="#" className="text-black-600 hover:text-blue-800 font-medium flex items-center">
                  Ver todos los recursos de {category.title} <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Contacto adicional */}
      <div className="mt-16 bg-[#FDE7B8] rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold mb-4">¿No encontraste lo que buscabas?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Nuestro equipo de expertos en instrumentos musicales está listo para ayudarte con cualquier pregunta específica que tengas.
        </p>
        <button className="bg-[#40250D] hover:bg-[#60250D] text-white px-6 py-3 rounded-lg transition-colors font-medium">
          Contactar al equipo de soporte
        </button>
      </div>
    </div>
  );
};

export default HelpResources;