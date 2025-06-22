import { Routes, Route } from "react-router-dom";
import { AuthPage, HomePage, MenuPage, NotFoundPage, OrderPage } from "@components/pages";
import { ProtectedRoute } from "@routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
