import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cómo puedo vender mi instrumento en CarpiChords?",
      answer: "Para vender tu instrumento, simplemente crea una cuenta, haz clic en 'Vender' y completa el formulario con detalles, fotos y precio. Nuestro equipo revisará la publicación y, una vez aprobada, será visible para miles de músicos."
    },
    {
      question: "¿Qué garantías ofrecen en las compras?",
      answer: "Ofrecemos un sistema de protección al comprador que cubre: autenticidad del instrumento, estado como descrito y entrega segura. Además, facilitamos la comunicación entre comprador y vendedor para resolver cualquier duda antes de la compra."
    },
    {
      question: "¿Cómo sé que el instrumento está en buen estado?",
      answer: "Todos los instrumentos pasan por una verificación básica de nuestro equipo. Recomendamos siempre solicitar fotos detalladas, videos demostrativos y, si es posible, una prueba presencial. Para instrumentos de alto valor, ofrecemos servicios de verificación profesional adicional."
    },
    {
      question: "¿Cuál es la comisión por vender en CarpiChords?",
      answer: "Nuestra comisión es del 5% sobre el precio de venta, con un mínimo de $10. Esta comisión incluye la visibilidad en nuestro marketplace, herramientas de gestión de ventas y protección tanto para compradores como vendedores."
    },
    {
      question: "¿Puedo probar un instrumento antes de comprarlo?",
      answer: "¡Absolutamente! Fomentamos las pruebas siempre que sea posible. Puedes coordinar directamente con el vendedor para una prueba presencial o solicitar un periodo de prueba con reembolso en algunos casos (sujeto a términos específicos)."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos todas las tarjetas de crédito/débito, transferencias bancarias y PayPal. Para transacciones entre particulares, recomendamos siempre utilizar nuestro sistema de pago seguro para mayor protección."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Preguntas frecuentes</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none ${activeIndex === index ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="font-medium text-lg md:text-xl text-gray-800">
                {faq.question}
              </h2>
              <span className="text-gray-500 text-2xl">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-4' : 'max-h-0'}`}
            >
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">¿No encontraste lo que buscabas?</p>
        <button className="bg-[#40250D] text-white px-6 py-3 rounded-lg hover:bg-[#60250D] transition-colors font-medium">
          Contacta a nuestro equipo
        </button>
      </div>
    </div>
  );
};

export default FAQ;