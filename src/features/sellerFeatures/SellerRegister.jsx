import { useState } from "react";
import SellerPolicyModal from "./DataBackPage";
import { useNavigate } from "react-router";
import { useAuth } from "../../services/auth/AuthContext";

const SellerRegister = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const { user, setUser } = useAuth();

  const handleConfirm = async () => {
    try {
      const response = await fetch('http://localhost:3000/register-seller', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ buyerId: user.id }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(prev => ({ ...prev, seller: { id: data.seller.ID_Sellers } }));
        navigate('/vender');
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-4 text-center flex flex-col justify-center items-center min-h-[600px]">
      <h1 className="text-5xl font-bold mb-2">Acceso restringido</h1>
      <p>Para acceder a esta sección necesitás estar registrado como vendedor.</p>

      <button
        onClick={() => setShowModal(true)}
        className="mt-6 max-w-[300px] bg-[#401809] text-[#FFE0C4] px-4 py-2 rounded-full hover:bg-[#40250D] transition-colors"
      >
        Registrarme como vendedor
      </button>

      {showModal && (
        <SellerPolicyModal
          onConfirm={handleConfirm}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default SellerRegister;
