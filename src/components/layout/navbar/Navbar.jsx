import { useState } from "react";
import { Search, Bell, Menu } from "lucide-react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router";
import SideBar from "../sideBar/SideBar"; // Asegúrate de que el path sea correcto

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar principal */}
      <nav className="w-full bg-[#40250D] px-6 py-3 flex items-center justify-between">
        {/* Sección izquierda */}
        <div className="flex items-center gap-6">
          {/* Botón de menú móvil */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white "
            aria-label="Abrir menú lateral"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo y título */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
            <h1 className="text-white text-xl font-semibold font-mono">CarpinChords</h1>
          </Link>

          {/* Links (ocultos en mobile) */}
          <ul className="hidden md:flex gap-6 text-white font-medium text-lg font-mono">
            <li>
              <Link to="/" className="hover:text-gray-300 transition-colors duration-200">
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

          <img
            src="https://i.pravatar.cc/300"
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </nav>

      {/* Sidebar componente */}
      <SideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}