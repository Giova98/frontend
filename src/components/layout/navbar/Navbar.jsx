import { Search, Bell } from "lucide-react";
import logo from "../../../assets/logo.png"; // ajustá el path si está en otra carpeta
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#40250D] px-6 py-3 flex items-center justify-between">
      {/* Sección izquierda: logo + links */}
      <div className="flex items-center gap-10">
        {/* Logo + titulo*/}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
          <h1 className="text-white text-xl font-semibold font-mono">CarpinChords</h1>
        </Link>
        {/* Links */}
        <ul className="flex gap-6 text-white font-medium text-lg font-mono">
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

      {/* Sección derecha: búsqueda + notificación + avatar */}
      <div className="flex items-center gap-5">
        {/* Barra de búsqueda */}
        <div className="relative transition-all duration-300 focus-within:w-[250px] w-[180px]">
          <Search className="absolute top-2.5 left-3 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#60250D] text-white pl-10 pr-4 py-2 rounded-md text-sm placeholder-gray-400 focus:outline-none w-full"
          />
        </div>

        {/* Icono de notificación */}
        <button className="text-gray-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
        </button>

        {/* Avatar de usuario (usá una imagen de perfil si tenés) */}
        <img
          src="https://i.pravatar.cc/300"
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </nav >
  );
}

