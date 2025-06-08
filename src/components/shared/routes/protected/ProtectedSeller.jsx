import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../../services/auth/AuthContext";

const ProtectedSeller = () => {
  const { user } = useAuth();

  if (!user.seller?.id) return <Navigate to="/registro-vendedor" replace />;

  return <Outlet />;
};

export default ProtectedSeller;