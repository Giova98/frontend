import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        if (token) {
            try {
                const storedUser = JSON.parse(localStorage.getItem('user') || 'null');                
                if (storedUser) setUser(storedUser);
            } catch (error) {
                console.error("Error parsing user from localStorage", error);
                setUser(null);
            }
        }
    }, [token]);

    const login = ({ token, user }) => {
        setToken(token);
        setUser(user);
        console.log(user);
        
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
        <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
