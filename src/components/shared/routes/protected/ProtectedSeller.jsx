import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../../services/auth/AuthContext";

const ProtectedSeller = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;  

  if (!user?.seller?.id) return <Navigate to="/registro-vendedor" replace />;

  return <Outlet />;
};

export default ProtectedSeller;