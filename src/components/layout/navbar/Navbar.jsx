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
        {/* Sección izquierda: menú + logo */}
        <div className="flex items-center gap-10">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white"
            aria-label="Abrir menú lateral"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <Link to="/home" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
            <h1 className="text-white text-xl font-semibold font-mono">CarpinChords</h1>
          </Link>


          <ul className="flex gap-6 text-white font-medium text-lg font-mono">
            <li><Link to="/home" className="hover:text-gray-300">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:text-gray-300">Catálogo</Link></li>
            <li><Link to="/vender" className="hover:text-gray-300">Vender</Link></li>
            <li><Link to="/contacto" className="hover:text-gray-300">Contacto</Link></li>
          </ul>
        </div>

        {/* Sección derecha: iconos */}
        <div className="flex items-center gap-5">

          <button className="text-gray-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>

          <Link to="/Perfil">
            <img
              src={user?.avatarUrl || avatarDefault}
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