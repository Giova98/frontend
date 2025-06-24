import { useState } from "react";
import fondo from "../../assets/fondo.png"; // Asegurate de que esta ruta sea correcta
import RegisterValidations from "../auth/RegisterValidations";
import { Link } from "react-router";
import { useAuth } from "../../services/auth/AuthContext";

const Register = ({ onRegisterSuccess }) => {
  const {
    formData,
    handleChange,
    validateBlur,
    errors,
    handleSubmit,
    successMessage,
    provinces,
    cities,
    selectedProvince,
    setSelectedProvince
  } = RegisterValidations(onRegisterSuccess);

  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex">
      <div className="w-full max-w-md mx-auto px-8 py-12 lg:w-1/2 flex flex-col justify-center">
        {!isAuthenticated && (
          <>
            <div className="flex justify-center mb-6">
              <svg
                className="h-8 w-8 text-[#40250D]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L10.59 1.41 18.17 9H0v2h18.17l-7.58 7.59L12 24l12-12L12 0z" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-center text-[#222] mb-2">
              Crea tu cuenta
            </h2>
            <p className="text-sm text-center text-[#444] mb-8">
              Ya tenés una cuenta?{" "}
              <Link to="/login" className="text-[#40250D] hover:underline">
                Iniciá sesión
              </Link>
            </p>
          </>
        )}

        {isAuthenticated && (
          <h2 className="text-2xl w-[200px] font-bold text-center text-[#222] mb-2">
            Crea un Usuario
          </h2>
        )}

        {successMessage && (
          <p className="text-green-600 font-semibold mb-4 text-center">
            {successMessage}
          </p>
        )}

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name='BuyersName'
              value={formData.BuyersName}
              onChange={handleChange}
              onBlur={validateBlur}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
            {errors.BuyersName && (
              <p className="text-red-500 text-sm mt-1">{errors.BuyersName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Apellido
            </label>
            <input
              type="text"
              name='BuyersLastName'
              value={formData.BuyersLastName}
              onChange={handleChange}
              onBlur={validateBlur}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
            {errors.BuyersLastName && (
              <p className="text-red-500 text-sm mt-1">{errors.BuyersLastName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre de usuario
            </label>
            <input
              type="text"
              name="NickName"
              value={formData.NickName}
              onChange={handleChange}
              onBlur={validateBlur}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
            {errors.NickName && (
              <p className="text-red-500 text-sm mt-1">{errors.NickName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              onBlur={validateBlur}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
            {errors.Email && (
              <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telefono
            </label>
            <input
              type="tel"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              onBlur={validateBlur}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
            {errors.Phone && (
              <p className="text-red-500 text-sm mt-1">{errors.Phone}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              DNI
            </label>
            <input
              type="number"
              name="DNI"
              value={formData.DNI}
              onChange={handleChange}
              onBlur={validateBlur}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
            {errors.DNI && (
              <p className="text-red-500 text-sm mt-1">{errors.DNI}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Provincia</label>
            <select
              name="ID_Province"
              value={selectedProvince}
              onChange={(e) => {
                setSelectedProvince(e.target.value);
                handleChange({ target: { name: 'ID_City', value: '' } });
              }}
              onBlur={validateBlur}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Selecciona una provincia</option>
              {provinces.map((provincia) => (
                <option key={provincia.ID_Province} value={provincia.ID_Province}>
                  {provincia.Name}
                </option>
              ))}
            </select>
            {errors.selectedProvince && (
              <p className="text-red-500 text-sm mt-1">{errors.selectedProvince}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Ciudad</label>
            <select
              name="ID_City"
              value={formData.ID_City}
              onChange={handleChange}
              onBlur={validateBlur}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Selecciona una ciudad</option>
              {cities.map((ciudad) => (
                <option key={ciudad.ID_City} value={ciudad.ID_City}>
                  {ciudad.Name}
                </option>
              ))}
            </select>
            {errors.ID_City && (
              <p className="text-red-500 text-sm mt-1">{errors.ID_City}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              name="Passwords"
              value={formData.Passwords}
              onChange={handleChange}
              onBlur={validateBlur}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
            {errors.Passwords && (
              <p className="text-red-500 text-sm mt-1">{errors.Passwords}</p>
            )}
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
              onBlur={validateBlur}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40250D] focus:border-[#40250D]"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-400 text-sm">El primer paso hacia tu próximo instrumento</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button
            type="submit"
            className="w-full bg-[#40250D] text-white py-2 px-4 rounded-md hover:bg-[#2e1809] transition"
          >
            Crear cuenta
          </button>
        </form>
      </div>

      {!isAuthenticated && (
        <div className="hidden lg:block w-1/2">
          <img
            src={fondo}
            alt="Register"
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Register;
