import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const admin = localStorage.getItem("admin");

  if (!token || !admin) {
    return <Navigate to="/admin/login" replace />;
  }

  try {
    const user = JSON.parse(admin);

    if (!user || !user.role) {
      localStorage.removeItem("token");
      localStorage.removeItem("admin");

      return <Navigate to="/admin/login" replace />;
    }

    return children;
  } catch (error) {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    return <Navigate to="/admin/login" replace />;
  }
};

export default ProtectedRoute;