import { useState } from "react";
import { Search, Bell, Menu } from "lucide-react";
import logo from "../../../assets/logo.png";
import avatarDefault from '../../../assets/avatarDefault.jpeg';
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import SellerPolicyModal from "../../../features/sellerFeatures/DataBackPage";
import { useAuth } from "../../../services/auth/AuthContext";
import { useSearch } from "../../../services/auth/SearchContext";

export default function Navbar({ publications }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const { searchTitle, setSearchTitle } = useSearch();

  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
    navigate('/catalogo');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#40250D] px-6 py-3 flex items-center justify-between shadow">
        {/* Izquierda: menú y logo */}
        <div className="flex items-center gap-10">
          <button onClick={() => setSidebarOpen(true)} className="text-white" aria-label="Abrir menú">
            <Menu className="w-6 h-6" />
          </button>

          <Link to="/home" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
            <h1 className="text-white text-xl font-semibold font-mono">CarpinChords</h1>
          </Link>

          <ul className="flex gap-6 text-white font-medium text-lg font-mono">
            <li><Link to="/home" className="hover:text-gray-300 transition-colors">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:text-gray-300 transition-colors">Catálogo</Link></li>
            <li><Link to="/vender" className="hover:text-gray-300 transition-colors">Vender</Link></li>
            <li><Link to="/contacto" className="hover:text-gray-300 transition-colors">Contacto</Link></li>
            {user?.isAdmin && (
              <li><Link to="/panel-admin" className="hover:text-gray-300 transition-colors">Panel Administrador</Link></li>
            )}
          </ul>
        </div>

        {/* Derecha: búsqueda, notificaciones y avatar */}
        <div className="flex items-center gap-5">
          <div className="relative">
            <Search className="absolute top-2.5 left-3 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchTitle}
              onChange={handleSearchChange}
              placeholder="Buscar..."
              className="bg-[#60250D] text-white pl-10 pr-4 py-2 rounded-md text-sm placeholder-gray-400 focus:outline-none"
            />
          </div>

          <button className="text-gray-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>

          <Link to="/Perfil">
            <img
              src={user?.avatarUrl ? `http://localhost:3000${user?.avatarUrl}` : avatarDefault}
              alt="Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
          </Link>
        </div>
      </nav>

      {/* Modal de políticas para vendedores */}
      {showPolicyModal && <SellerPolicyModal onConfirm={handleConfirmSeller} />}

      {/* Sidebar */}
      <SideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
