import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Admin/Sidebar";
import Topbar from "../components/Admin/Topbar";

import "../components/Admin/DashboardLayout.css";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="dashboard-main">
        <Topbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;