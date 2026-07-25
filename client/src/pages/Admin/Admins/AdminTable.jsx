const AdminTable = ({
  admins,
  loading,
  onEdit,
  onDelete,
  onResetPassword,
  isSuperAdmin,
}) => {
  if (loading) {
    return (
      <div className="table-message">
        Loading admins...
      </div>
    );
  }

  if (!admins.length) {
    return (
      <div className="table-message">
        No admins found.
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created</th>
            {isSuperAdmin && (
              <th className="text-center">Actions</th>
            )}
          </tr>
        </thead>

        <tbody>
          {admins.map((admin) => (
            <tr key={admin._id}>
              <td>{admin.name}</td>

              <td>{admin.email}</td>

              <td>
                <span className="role-badge">
                  {admin.role}
                </span>
              </td>

              <td>
                <span
                  className={
                    admin.isActive
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {admin.isActive
                    ? "Active"
                    : "Inactive"}
                </span>
              </td>

              <td>
                {new Date(
                  admin.createdAt
                ).toLocaleDateString()}
              </td>

              {isSuperAdmin && (
                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() =>
                        onEdit(admin)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="edit-btn"
                      onClick={() =>
                        onResetPassword(admin)
                      }
                    >
                      Reset Password
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        onDelete(admin)
                      }
                    >
                      Delete
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}

      <div className="mobile-admin-list">
        {admins.map((admin) => (
          <div
            className="admin-card"
            key={admin._id}
          >
            <div className="card-row">
              <span>Name</span>
              <strong>{admin.name}</strong>
            </div>

            <div className="card-row">
              <span>Email</span>
              <strong>{admin.email}</strong>
            </div>

            <div className="card-row">
              <span>Role</span>
              <strong>{admin.role}</strong>
            </div>

            <div className="card-row">
              <span>Status</span>

              <strong
                className={
                  admin.isActive
                    ? "status active"
                    : "status inactive"
                }
              >
                {admin.isActive
                  ? "Active"
                  : "Inactive"}
              </strong>
            </div>

            <div className="card-row">
              <span>Created</span>

              <strong>
                {new Date(
                  admin.createdAt
                ).toLocaleDateString()}
              </strong>
            </div>

            {isSuperAdmin && (
              <div className="card-actions">
                <button
                  className="edit-btn"
                  onClick={() =>
                    onEdit(admin)
                  }
                >
                  Edit
                </button>

                <button
                  className="edit-btn"
                  onClick={() =>
                    onResetPassword(admin)
                  }
                >
                  Reset Password
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    onDelete(admin)
                  }
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTable;