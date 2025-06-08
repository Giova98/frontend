import { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import { notifyMissingFields, notifySuccessAdd } from '../notification/notification';
import { Banknote, User, BadgeDollarSign, CreditCard, IdCard } from 'lucide-react';

const BankDataPage = () => {
  const [bankData, setBankData] = useState({
    fullName: 'Alessandro Rodríguez',
    bankName: 'Banco Nación',
    tarjet: '1234567',
    CVV: '924',
    Pais: 'Argentina',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const { fullName, bankName, tarjet, CVV, Pais } = bankData;
    if (!fullName || !bankName || !tarjet || !CVV || !Pais) {
      notifyMissingFields(`¡Ingrese los Datos requeridos!`);
      return;
    }
    notifySuccessAdd(`¡Los datos fueron actualizados con exito!`);
  };

  return (
    <div className="w-[1000px] to-[#F5CBA7] flex items-center justify-center py-20 px-4 m-[auto] ">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-[#E0B48B] p-10"
      >
        <h1 className="text-5xl font-bold text-[#40250D] mb-10 text-center font-poppins">
          Configurar cuenta bancaria
        </h1>

        <div className="grid grid-cols-1 gap-6 text-[#40250D] font-poppins text-lg m-[25px]">
          {/* Campo: Nombre */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold flex items-center gap-2">
              <User className="w-5 h-5" /> Nombre completo
            </label>
            <input
              type="text"
              name="fullName"
              value={bankData.fullName}
              onChange={handleChange}
              className="p-4 rounded-xl border border-[#D6A676] bg-[#FFF9F1] focus:outline-[#40250D]"
            />
          </div>

          {/* Campo: Banco */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold flex items-center gap-2">
              <Banknote className="w-5 h-5" /> Nombre del banco
            </label>
            <input
              type="text"
              name="bankName"
              value={bankData.bankName}
              onChange={handleChange}
              className="p-4 rounded-xl border border-[#D6A676] bg-[#FFF9F1] focus:outline-[#40250D]"
            />
          </div>

          {/* Campo: tarjet */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold flex items-center gap-2">
              <CreditCard className="w-5 h-5" /> Numero de tarjeta
            </label>
            <input
              type="text"
              name="tarjet"
              value={bankData.tarjet}
              onChange={handleChange}
              className="p-4 rounded-xl border border-[#D6A676] bg-[#FFF9F1] focus:outline-[#40250D]"
            />
          </div>

          {/* Campo: CVV */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold flex items-center gap-2">
              <BadgeDollarSign className="w-5 h-5" /> CVV
            </label>
            <input
              type="text"
              name="CVV"
              value={bankData.CVV}
              onChange={handleChange}
              className="p-4 rounded-xl border border-[#D6A676] bg-[#FFF9F1] focus:outline-[#40250D]"
            />
          </div>

          {/* Campo: Pais */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold flex items-center gap-2">
              <IdCard className="w-5 h-5" /> Pais
            </label>
            <input
              type="text"
              name="Pais"
              value={bankData.Pais}
              onChange={handleChange}
              className="p-4 rounded-xl border border-[#D6A676] bg-[#FFF9F1] focus:outline-[#40250D]"
            />
          </div>

          {/* Botón de guardar */}
          <motion.button
            type="button"
            onClick={handleSave}
            whileTap={{ scale: 0.95 }}
            className="mt-8 w-full py-4 text-xl font-bold bg-[#40250D] text-[#FDE7B9] rounded-xl hover:bg-[#5B361A] transition duration-300"
          >
            Guardar cambios
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default BankDataPage;
