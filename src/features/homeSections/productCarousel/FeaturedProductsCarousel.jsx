import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PublicationCard from '../../publications/publicationCard/PublicationCard';

const FeaturedProductsCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const VISIBLE_PRODUCTS = 3;

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev >= products.length - VISIBLE_PRODUCTS ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev <= 0 ? products.length - VISIBLE_PRODUCTS : prev - 1
    );
  };

  useEffect(() => {
    if (products.length <= VISIBLE_PRODUCTS) return;
    
    const interval = setInterval(() => {
      if (!isHovered) nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  if (products.length === 0) return null;

  return (
    <div 
      className="w-full bg-[#FDE7B9] py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1000px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#401809]">
          Instrumentos Destacados
        </h2>
        
        <div className="relative overflow-hidden">
          {products.length > VISIBLE_PRODUCTS && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-[#FFD8A9] text-[#401809] p-2 rounded-full shadow-md hover:bg-[#9D9B8F] transition"
              >
                ‹
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-[#FFD8A9] text-[#401809] p-2 rounded-full shadow-md hover:bg-[#9D9B8F] transition"
              >
                ›
              </button>
            </>
          )}

          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / VISIBLE_PRODUCTS)}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-2"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="h-full"
                >
                  <PublicationCard {...product} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {products.length > VISIBLE_PRODUCTS && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(products.length / VISIBLE_PRODUCTS) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * VISIBLE_PRODUCTS)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex >= i * VISIBLE_PRODUCTS && 
                  currentIndex < (i + 1) * VISIBLE_PRODUCTS ? 
                  'bg-[#FFD8A9]' : 'bg-[#9D9B8F]'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProductsCarousel;