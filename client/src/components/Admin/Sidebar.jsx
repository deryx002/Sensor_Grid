import { NavLink, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem("admin"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    if (onClose) onClose();
    navigate("/admin/login");
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <h2>SensorGrid</h2>
          <p>Admin Panel</p>
        </div>
        <button
          className="sidebar-close-btn"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="sidebar-menu">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
          onClick={onClose}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/contacts"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
          onClick={onClose}
        >
          Contacts
        </NavLink>


        <NavLink
          to="/admin/admins"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
          onClick={onClose}
        >
          Admins
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="admin-card">
          <h4>{admin?.name}</h4>
          <p>{admin?.role}</p>
        </div>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;