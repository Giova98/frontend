import { Search, Bell } from "lucide-react";
import logo from "../../assets/logo.png"; // ajustá el path si está en otra carpeta

export default function NavbarV2() {
    return (
        <nav className="w-full bg-[#40250D] px-6 py-3 flex items-center justify-between">

            {/* Sección izquierda: logo + links */}
            <div className="flex items-center gap-10">
                {/* Logo + titulo*/}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-14 w-auto" />
                    <h1 className="text-white text-xl font-semibold font-mono">CarpiChords</h1>
                </div>
                {/* Links */}
                <ul className="flex gap-6 text-white font-medium text-lg font-mono">
                    <li className="hover:text-gray-300 transition-colors duration-200">Inicio</li>
                    <li className="hover:text-gray-300 transition-colors duration-200">Catalogo</li>
                    <li className="hover:text-gray-300 transition-colors duration-200">Vender</li>
                    <li className="hover:text-gray-300 transition-colors duration-200">Contacto</li>
                </ul>
            </div>

            {/* Sección derecha: búsqueda + notificación + avatar */}
            <div className="flex items-center gap-5">
                {/* Barra de búsqueda */}
                <div className="relative">
                    <Search className="absolute top-2.5 left-3 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-[#60250D] text-white pl-10 pr-4 py-2 rounded-md text-sm placeholder-gray-400 focus:outline-none"
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
        </nav>
    );
}
