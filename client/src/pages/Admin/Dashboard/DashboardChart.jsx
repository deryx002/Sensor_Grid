import "./Dashboard.css";

const DashboardChart = ({ stats }) => {
  const chartData = [
    {
      label: "New",
      value: stats.newProjects,
      className: "new",
    },
    {
      label: "Contacted",
      value: stats.contactedProjects,
      className: "contacted",
    },
    {
      label: "In Progress",
      value: stats.inProgressProjects,
      className: "progress",
    },
    {
      label: "Completed",
      value: stats.completedProjects,
      className: "completed",
    },
    {
      label: "Rejected",
      value: stats.rejectedProjects,
      className: "rejected",
    },
  ];

  const maxValue = Math.max(
    ...chartData.map((item) => item.value),
    1
  );

  return (
    <div className="dashboard-chart">
      <div className="chart-header">
        <h3>Project Status Overview</h3>
        <p>Current project distribution</p>
      </div>

      <div className="chart-container">
        {chartData.map((item) => (
          <div className="chart-row" key={item.label}>
            <div className="chart-label">
              {item.label}
            </div>

            <div className="chart-bar-wrapper">
              <div
                className={`chart-bar ${item.className}`}
                style={{
                  width: `${
                    (item.value / maxValue) * 100
                  }%`,
                }}
              >
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="chart-summary">
        <div className="summary-item">
          <span>Total Projects</span>
          <strong>{stats.totalProjects}</strong>
        </div>

        <div className="summary-item">
          <span>Total Admins</span>
          <strong>{stats.totalAdmins}</strong>
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;