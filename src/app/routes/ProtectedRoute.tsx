import { AUTH_KEY, getLocalValue } from "@utils";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userId = getLocalValue(AUTH_KEY);

  return userId ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
