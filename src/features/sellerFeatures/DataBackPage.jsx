const SellerPolicyModal = ({ onConfirm, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className="bg-[#FDE7B9] text-[#363738] p-8 rounded-2xl shadow-xl max-w-lg w-full relative"
        style={{
          border: "2px solid #40250D",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#40250D] font-bold text-xl hover:text-red-600"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-[#40250D]">
          Políticas y Acuerdos
        </h2>

        <div className="text-sm space-y-3 max-h-[300px] overflow-y-auto pr-1">
          <p>✅ Al registrarte como vendedor, aceptás cumplir con las leyes locales y los términos de uso de esta plataforma.</p>
          <p>✅ Es tu responsabilidad asegurarte de que los instrumentos publicados sean de tu propiedad o cuentes con autorización para venderlos.</p>
          <p>✅ Los productos deben ser descritos con honestidad y precisión. Fotos, estado, precios y condiciones deben ser claros.</p>
          <p>✅ En caso de conflicto, nos reservamos el derecho de intervenir y sancionar conductas indebidas o engañosas.</p>
          <p>✅ El vendedor debe proporcionar un medio de contacto válido y mantener la comunicación con los compradores interesados.</p>
          <p>✅ Está prohibido publicar productos ilegales, robados o que infrinjan derechos de autor.</p>
        </div>

        <button
          onClick={onConfirm}
          className="mt-6 w-full bg-[#40250D] text-[#FDE7B9] py-2 rounded-lg hover:bg-[#5A3821] transition duration-300 font-semibold"
        >
          Acepto los Términos y Quiero Ser Vendedor
        </button>
      </div>
    </div>
  );
};

export default SellerPolicyModal;
