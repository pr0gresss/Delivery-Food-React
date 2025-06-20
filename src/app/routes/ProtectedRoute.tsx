import { selectCurrentUser } from "@features/auth";
import { useAppSelector } from "@store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = !!useAppSelector(selectCurrentUser);

  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
