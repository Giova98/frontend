import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react'; // Import corregido

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1, // Añade un id único
      quote: "Encontré la guitarra perfecta...",
      author: "Carlos Méndez",
      role: "Guitarrista profesional",
      rating: 5
    },
    {
      id: 2,
      quote: "Vendí mi batería en menos de 48 horas...",
      author: "Lucía Fernández",
      role: "Baterista",
      rating: 5
    },
    {
      id: 3,
      quote: "El asesoramiento musical...",
      author: "Diego Ramírez",
      role: "Productor musical",
      rating: 4
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#40250D] mb-2">Testimonios</h2>
          <p className="text-xl text-[#60250D]">Historias de músicos como vos</p>
        </div>

        {/* Grid de testimonios - KEY CORREGIDA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id} // Usamos el id único en lugar del índice
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-[#60250D] mb-4" />
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="bg-[#60250D] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#40250D]">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={`star-${testimonial.id}-${i}`} // Key única para cada estrella
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}

      </div>
    </section>
  );
};

export default TestimonialsSection;