import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import "./Dashboard.css";

import dashboardApi from "../../../api/dashboard.api";
import DashboardCard from "./DashboardCard";
import DashboardChart from "./DashboardChart";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    newProjects: 0,
    contactedProjects: 0,
    inProgressProjects: 0,
    completedProjects: 0,
    rejectedProjects: 0,
    totalAdmins: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const response = await dashboardApi.getDashboardStats();

      setStats(response.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loading">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p>SensorGrid Admin Dashboard</p>
      </div>

      <div className="dashboard-grid">
        <DashboardCard
          title="Total Projects"
          value={stats.totalProjects}
        />

        <DashboardCard
          title="New Projects"
          value={stats.newProjects}
        />

        <DashboardCard
          title="Contacted"
          value={stats.contactedProjects}
        />

        <DashboardCard
          title="In Progress"
          value={stats.inProgressProjects}
        />

        <DashboardCard
          title="Completed"
          value={stats.completedProjects}
        />

        <DashboardCard
          title="Rejected"
          value={stats.rejectedProjects}
        />

        <DashboardCard
          title="Admins"
          value={stats.totalAdmins}
        />
      </div>

      <DashboardChart stats={stats} />
    </div>
  );
};

export default Dashboard;