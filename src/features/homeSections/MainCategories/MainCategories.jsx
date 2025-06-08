import React from 'react';
import { motion } from 'framer-motion';
import guitarraAcustica from '../../../assets/guitarraAcustica.png'
import guitarraStratocaster from '../../../assets/guitarraStratocaster.png'
import bateria from '../../../assets/bateria.png'
import teclado from '../../../assets/teclado.png'
import bajo from '../../../assets/bajo.png'
import accesoriosMusicales from '../../../assets/accesoriosMusicales.png'

const MainCategories = () => {
  // Datos de categorías (puedes reemplazar con tus categorías reales)
  const categories = [
    { name: 'Guitarras acustica', count: 128, image: guitarraAcustica },
    { name: 'Baterías', count: 76, image: bateria },
    { name: 'Teclados', count: 92, image: teclado },
    { name: 'Bajos', count: 64, image: bajo },
    { name: 'Guitarras electricas', count: 53, image: guitarraStratocaster },
    { name: 'Accesorios musicales', count: 87, image: accesoriosMusicales },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#40250D] mb-4">Explora por Categoría</h2>
          <p className="text-lg text-[#60250D] max-w-2xl mx-auto">
            Descubre los instrumentos que necesitas para tu próxima creación musical
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              {/* Imagen de fondo */}
              <div className="h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#40250D]/90 to-transparent" />
              </div>

              {/* Contenido */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-white/80">{category.count} instrumentos</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#40250D] hover:bg-[#60250D] text-white px-6 py-2 rounded-full font-medium transition-colors"
                  >
                    Ver colección
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón para ver todas las categorías */}
        <div className="text-center mt-12">
          <button className="bg-[#60250D] hover:bg-[#40250D] text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-md">
            Ver todas las categorías
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;