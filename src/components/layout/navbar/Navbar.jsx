import { useState } from "react";
import { Search, Bell, Menu } from "lucide-react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router";
import avatarDefault from '../../../assets/avatarDefault.jpeg';
import SideBar from "../sideBar/SideBar"; // Asegúrate de que el path sea correcto

import { useAuth } from "../../../services/auth/AuthContext";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user } = useAuth();
  
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#40250D] px-6 py-3 flex items-center justify-between shadow">
        {/* Sección izquierda: logo + links */}
        <div className="flex items-center gap-10">
          {/* Botón de menú móvil */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white "
            aria-label="Abrir menú lateral"
          >
            <Menu className="w-6 h-6" />
          </button>
          {/* Logo + titulo*/}
          <Link to="/home" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
            <h1 className="text-white text-xl font-semibold font-mono">CarpinChords</h1>
          </Link>
          {/* Links */}
          <ul className="flex gap-6 text-white font-medium text-lg font-mono">
            <li>
              <Link to="/home" className="hover:text-gray-300 transition-colors duration-200">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/catalogo" className="hover:text-gray-300 transition-colors duration-200">
                Catálogo
              </Link>
            </li>
            <li>
              <Link to="/vender" className="hover:text-gray-300 transition-colors duration-200">
                Vender
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-gray-300 transition-colors duration-200">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Sección derecha */}
        <div className="flex items-center gap-5">
          <div className="relative">
            <Search className="absolute top-2.5 left-3 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar"
              className="bg-[#60250D] text-white pl-10 pr-4 py-2 rounded-md text-sm placeholder-gray-400 focus:outline-none"
            />
          </div>

          <button className="text-gray-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>

          <Link to="/Perfil">
            <img
              src={user?.avatarUrl || avatarDefault }
              alt="Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
          </Link>
        </div>
      </nav>

      {/* Sidebar componente */}
      <SideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}