import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
