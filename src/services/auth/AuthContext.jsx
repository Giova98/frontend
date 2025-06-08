import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Inicializo directamente con función para leer localStorage
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');
  const [user, setUser] = useState(() => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ya que inicializamos con localStorage, solo seteamos loading a false acá
    setLoading(false);
  }, []);

  const login = ({ token, user }) => {
    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setToken('');
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        setUser,
        login,
        logout,
        isAuthenticated: !!token,
        tokenisAdmin: user?.isAdmin || false,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
