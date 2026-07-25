import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import "./Topbar.css";

const Topbar = ({ onToggleSidebar }) => {
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem("admin"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    navigate("/admin/login");
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          className="sidebar-toggle-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>
        <h2>SensorGrid Admin</h2>
      </div>

      <div className="topbar-right">
        <div className="admin-info">
          <span>{admin?.name}</span>
          <small>{admin?.role}</small>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;