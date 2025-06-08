import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Link } from "react-router";
import AnimatedBackgroundSlider from './AnimatedBackgroundSlider';
import fondoSlider from '../../../assets/fondoSlider.png'
import fondoSlider2 from '../../../assets/fondoSlider2.png'
import fondoSlider3 from '../../../assets/fondoSlider3.png'
import fondoSlider4 from '../../../assets/fondoSlider4.png'

const HeroSection = () => {
  const instrumentImages = [
    fondoSlider,
    fondoSlider2,
    fondoSlider3,
    fondoSlider4,
  ];

  return (
    <header className="relative w-screen h-[80vh] min-h-[100px] max-h-[900px] overflow-hidden bg-black left-1/2 -translate-x-1/2">

      {/* Slider como componente separado */}
      <AnimatedBackgroundSlider images={instrumentImages} />
      
      {/* Contenido principal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "backOut" }}
        >
          <span className="text-white">Instrumentos</span> con alma, <br />
          transacciones con <span className="text-white">seguridad</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
        >
          El marketplace donde músicos confían para comprar y vender equipos de calidad
        </motion.p>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/catalogo">
          <button className="bg-transparent border-2 hover:bg-[#40250D] border-white text-white hover:text-[#FFD8A9] px-8 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg">
            Explorar catálogo
          </button>
          </Link>
          <Link to="/vender">
          <button className="bg-transparent border-2 hover:bg-[#40250D] border-white text-white hover:text-[#FFD8A9] px-8 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg">
            Vender un instrumento
          </button>
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;