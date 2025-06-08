import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Headphones, Star } from 'lucide-react'; // Importa íconos

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Envíos Rápidos",
      description: "Recibe tu instrumento en 24-48h en áreas metropolitanas"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Garantía Musical",
      description: "30 días de garantía en todos los instrumentos nuevos"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Asesoramiento Expertos",
      description: "Músicos profesionales te ayudan a elegir"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Calidad Certificada",
      description: "Todos los instrumentos son verificados por nuestro equipo"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#40250D] mb-4">Por qué elegirnos</h2>
          <p className="text-lg text-[#60250D] max-w-2xl mx-auto">
            Beneficios exclusivos para músicos como tú
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#60250D] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {React.cloneElement(benefit.icon, { className: "w-6 h-6 text-white" })}
              </div>
              <h3 className="text-xl font-bold text-[#40250D] mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <button className="text-[#60250D] font-medium hover:text-[#40250D] flex items-center">
                Conocer más
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#60250D] hover:bg-[#40250D] text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-md"
          >
            Descubre todos los beneficios
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;