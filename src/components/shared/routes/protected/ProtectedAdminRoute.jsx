import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../../services/auth/AuthContext';

const ProtectedAdminRoute = () => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) return null;

  if (!isAuthenticated || !user?.isAdmin) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedAdminRoute;
