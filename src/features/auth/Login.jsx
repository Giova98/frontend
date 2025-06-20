import { useNavigate, Link } from 'react-router';
import { useState } from 'react';

import { loginBuyer } from '../../services/auth/auth.services';
import { useAuth } from '../../services/auth/AuthContext';

import fondo from '../../assets/fondo.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError('');
    try {
      const data = await loginBuyer(email, password);
      const { token, user } = data;

      login({ token, user });
      
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }

  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full max-w-md mx-auto px-8 py-12 lg:w-1/2 flex flex-col justify-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <svg className="h-8 w-8 text-[#40250D]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L10.59 1.41 18.17 9H0v2h18.17l-7.58 7.59L12 24l12-12L12 0z" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Inicie sesion en tu cuenta
        </h2>
        <p className="text-sm text-center text-[#40250D] mb-8">
          No sos miembro? <Link to="/Register" className="font-semibold underline hover:opacity-80">Unite a esta aventura</Link>
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name='email'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              id="password"
              name='password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" className="mr-2 rounded border-gray-300" />
              Recordar inicio de sesion
            </label>
            <a href="#" className="text-sm text-[#40250D] font-medium hover:underline">¿Olvidaste tu contraseña?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#40250D] hover:bg-[#2f1a09] text-white font-semibold py-2 px-4 rounded"
          >
            Iniciar sesion
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-gray-400 text-sm text-black">o continuar con</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex gap-4">
          <button className="flex items-center justify-center w-full border border-gray-300 rounded py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5 mr-2 [#FDE7B9]" alt="Google" />
            Google
          </button>
          <button className="flex items-center justify-center w-full border border-gray-300 rounded py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/250px-2021_Facebook_icon.svg.png' className="h-5 w-5 mr-2" />
            Facebook
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          className="h-full w-[1490px] object-cover"
          src={fondo} // Cambia esto por el path de tu imagen
          alt="Login visual"
        />
      </div>
    </div>
  );
};

export default Login;