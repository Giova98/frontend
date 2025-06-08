import {
  Facebook,
  Instagram,
  Twitter,

} from "lucide-react";
import logo from '../../../assets/logo.png'

export default function Footer() {
  return (
    <footer className="w-full bg-[#40250D] px-6 py-3 flex items-center justify-between">
      <div className="max-w-7xl mx-auto mt-5">
        <div className="md:flex md:justify-between">
          {/* Izquierda: logo, descripción, íconos */}
          <div className="mb-6 md:mb-0 max-w-lg pr-20">
            <a href="#" className="flex items-center mb-4 text-white text-xl font-semibold font-mono">
              <img src={logo} alt="Logo" className="h-14 w-auto" />
              CharpiChords
            </a>
            <p className="mb-6 text-sm text-[#FFD8A9]">
              CarpiChords es un marketplace especializado donde músicos y amantes del sonido pueden encontrar una <br /> amplia variedad de instrumentos y accesorios.
            </p>
            <div className="flex space-x-6 ml-15">
              <a href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E1306C] transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          {/* Derecha: columnas */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mt-8 md:mt-0">
            <div>
              <h2 className="mb-4 ml-8 text-sm font-semibold text-white uppercase hover:text-gray-300 transition-colors duration-200"><a href="SobreNosotros"> Sobre nosotros</a></h2>
              <ul className="space-y-2 text-sm ml-8">
                <li><a href="SobreNosotros#quienes-somos" className="hover:underline text-[#FFD8A9]">Quienes somos</a></li>
                <li><a href="SobreNosotros#nuestro-valores" className="hover:underline text-[#FFD8A9]">Nuestros valores</a></li>
                <li><a href="SobreNosotros#nuestro-equipo" className="hover:underline text-[#FFD8A9]">Nuestro equipo</a></li>
                <li><a href="SobreNosotros#sumate-equipo" className="hover:underline text-[#FFD8A9]">Sumate al equipo</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase hover:text-gray-300 transition-colors duration-200"><a href="FAQ"> Preguntas Frecuentes</a></h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline text-[#FFD8A9]">¿Cómo vender mis productos?</a></li>
                <li><a href="#" className="hover:underline text-[#FFD8A9]">¿Qué métodos de pago están disponibles?</a></li>
                <li><a href="#" className="hover:underline text-[#FFD8A9]">¿Problemas con una compra?</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase hover:text-gray-300 transition-colors duration-200"><a href="TerminosPoliticas"> Terminos & politicas</a></h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline text-[#FFD8A9]">Política de privacidad</a></li>
                <li><a href="#" className="hover:underline text-[#FFD8A9]">Política de devoluciones y reembolsos</a></li>
                <li><a href="#" className="hover:underline text-[#FFD8A9]">Términos y condiciones del vendedor</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase hover:text-gray-300 transition-colors duration-200"><a href="RecursosUtiles"> Recursos utiles</a></h2>
              <ul className="space-y-2 text-sm">
                <li><a href="RecursosUtiles#guia-comprar" className="hover:underline text-[#FFD8A9]">Guía para comprar instrumentos</a></li>
                <li><a href="#" className="hover:underline text-[#FFD8A9]">Guía para vender tus productos</a></li>
                <li><a href="#" className="hover:underline text-[#FFD8A9]">Comparativa de marcas y modelos</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea separadora y derechos */}
        <hr className="my-8 border-gray-600" />
        <span className="block text-center text-sm text-[#FFD8A9] mb-5">
          © 2025 <a href="#" className="hover:underline">Facu-Code-Team™</a>. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
