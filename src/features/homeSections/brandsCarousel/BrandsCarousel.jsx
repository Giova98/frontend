import React from 'react';
import { motion } from 'framer-motion';
import logoFender from '../../../assets/logoFender.png';
import logoGibson from '../../../assets/logoGibson.png';
import logoJackson from '../../../assets/logoJackson.png';
import logoPearl from '../../../assets/logoPearl.png';
import logoWarwick from '../../../assets/logoWarwick.png';

const BrandsCarousel = () => {
  const brands = [
    { name: 'Fender', logo: logoFender },
    { name: 'Gibson', logo: logoGibson },
    { name: 'Jackson', logo: logoJackson },
    { name: 'Pearl', logo: logoPearl },
    { name: 'Warwick', logo: logoWarwick },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full py-16 "> {/* Aumenté el padding vertical */}
      <div className="max-w-6xl mx-auto px-4"> {/* Contenedor más ancho */}
        <h2 className="text-3xl font-bold text-center mb-12 text-[#401809]"> {/* Texto más grande */}
          Las marcas que confían en nosotros
        </h2>
        
        <div className="relative overflow-hidden h-60"> {/* Altura fija más grande */}
          <motion.div
            className="flex h-full items-center" /* Alineación vertical */
            animate={{
              x: ['0%', '-100%'],
              transition: {
                duration: 40,
                repeat: Infinity,
                ease: 'linear'
              }
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`} 
                className="flex-shrink-0 px-4 flex items-center justify-center" /* Más espacio horizontal */
                style={{ width: '300px' }} /* Logo más ancho */
              >
                <div className="p-6 h-full flex items-center">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-h-24 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-90 hover:opacity-100" /* Imagen más grande */
                  />
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Efectos de desvanecimiento mejorados */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDE7B9] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FDE7B9] to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default BrandsCarousel;