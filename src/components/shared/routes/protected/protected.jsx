import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../../../services/auth/AuthContext";

const Protected = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default Protected;