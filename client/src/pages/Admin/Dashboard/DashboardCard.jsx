import "./Dashboard.css";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-content">
        <h4>{title}</h4>

        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default DashboardCard;