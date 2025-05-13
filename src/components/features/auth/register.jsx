import fondo from "../../../assets/fondo.png"; // Asegurate de que esta ruta sea correcta
import RegisterValidations from "../RegisterValidations";

const Register = () => {

  const {formData, handleChange} = RegisterValidations();

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full max-w-md mx-auto px-8 py-12 lg:w-1/2 flex flex-col justify-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <svg
            className="h-8 w-8 text-[#40250D]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L10.59 1.41 18.17 9H0v2h18.17l-7.58 7.59L12 24l12-12L12 0z" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-[#222] mb-2">
          Crea tu cuenta
        </h2>
        <p className="text-sm text-center text-[#444] mb-8">
          Ya tenés una cuenta?{" "}
          <a href="#" className="text-[#40250D] hover:underline">
            Iniciá sesión
          </a>
        </p>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre completo
            </label>
            <input
              type="text"
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}              
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre de usuario
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telefono
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
          </div>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-400 text-sm">Eligi que queres ser</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" name="isSeller" checked={formData.isSeller} onChange={handleChange} className="mr-2 rounded border-gray-300" />
              Ser vendedor
            </label>
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" name="isUser" checked={formData.isUser} onChange={handleChange} className="mr-2 rounded border-gray-300" />
              Ser usuario
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#40250D] text-white py-2 px-4 rounded-md hover:bg-[#2e1809] transition"
          >
            Crear cuenta
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block w-1/2">
        <img
          src={fondo}
          alt="Register"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
