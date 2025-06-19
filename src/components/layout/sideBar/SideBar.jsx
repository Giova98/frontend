import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Squares2X2Icon,
  TagIcon,
  ArrowUpTrayIcon,
  ChatBubbleLeftRightIcon,
  BanknotesIcon,
  UserIcon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/solid';

import { useAuth } from '../../../services/auth/AuthContext';
import { useNavigate } from 'react-router';

const sidebarOptions = [
  { text: 'Home', Icon: Squares2X2Icon, route: '/home' },
  { text: 'Mis Publicaciones', Icon: TagIcon, route: '/vender' },
  { text: 'Subir Publicación', Icon: ArrowUpTrayIcon, route: '/AñadirPublicacion' },
  { text: 'Mis Pedidos', Icon: DocumentTextIcon, route: '/MisPedidos' },
  { text: 'Chat', Icon: ChatBubbleLeftRightIcon, route: '/Chat' },
  { text: 'Datos Bancarios', Icon: BanknotesIcon, route: '/home' },
  { text: 'Perfil', Icon: UserIcon, route: '/Perfil' },
];
const SideBar = ({ open, onClose }) => {
  const [confirmData, setConfirmData] = useState({
    show: false,
    id: null,
    message: '',
  });

  const { logout, user, token } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const openConfirm = (id) => {
    setConfirmData({
      show: true,
      id,
      message: "¿Eliminar este usuario?"
    });
  };

  const closeConfirm = () => {
    setConfirmData({
      show: false,
      id: null,
      message: "",
    });
  };

  const confirmAction = () => {
    deleteUser(confirmData.id);
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:3000/admin/usuarios/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      closeConfirm();
      logout();
      navigate('/login');

    } catch (error) {
      console.error("Error al eliminar usuario", error);
      closeConfirm();
    }
  };

  return (
    <>
      {/* Fondo oscuro al abrir */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Panel lateral */}
      <motion.div
        className="fixed left-0 top-0 h-full w-64 bg-[#40250D] z-50 shadow-lg"
        initial={{ x: '-100%' }}
        animate={{ x: open ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center">
          <span className="text-white text-xl font-bold font-poppins">Menú</span>
          <button onClick={onClose} aria-label="Cerrar menú">
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        <hr className="border-t border-[#401809]" />

        {/* Opciones */}
        <ul>
          {sidebarOptions.map(({ text, Icon, route }) => (
            <li key={text}>
              <button
                className="group flex items-center space-x-4 py-4 px-4 w-full text-left hover:bg-[#401809] focus:outline-none focus:ring-2 focus:ring-[#FFE0C4]"
                onClick={() => {
                  navigate(route);
                  onClose(); // cerrá el menú al hacer click
                }}
                aria-label={`Ir a ${text}`}
              >
                <Icon className="h-6 w-6 text-white group-hover:text-[#FFE0C4]" />
                <span className="text-white group-hover:text-[#FFE0C4] font-poppins text-lg">
                  {text}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <hr className="border-t border-[#FFE0C4] m-3" />

        <button
          onClick={handleLogout}
          className="group flex items-center space-x-4 py-4 px-4 w-full text-left hover:bg-[#401809] focus:outline-none focus:ring-2 focus:ring-[#FFE0C4]"
        >
          <ArrowLeftOnRectangleIcon className="h-6 w-6 text-white group-hover:text-[#FFE0C4]" />
          <span className="text-white group-hover:text-[#FFE0C4] font-poppins text-lg">
            Cerrar sesión
          </span>
        </button>

        <button
          onClick={() => openConfirm(user.id)}
          className="group flex items-center space-x-4 py-4 px-4 w-full text-left hover:bg-[#401809] focus:outline-none focus:ring-2 focus:ring-[#FFE0C4]"
        >
          <ArrowLeftOnRectangleIcon className="h-6 w-6 text-red-400 group-hover:text-[#FFE0C4]" />
          <span className="text-red-400 group-hover:text-[#FFE0C4] font-poppins text-lg">
            Eliminar usuario
          </span>
        </button>
      </motion.div>

      {confirmData.show && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 max-w-full shadow-lg">
            <p className="mb-4">{confirmData.message}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={closeConfirm}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={confirmAction}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
