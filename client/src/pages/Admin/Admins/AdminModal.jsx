import { useEffect, useState } from "react";

const AdminModal = ({
  admin,
  onClose,
  onSubmit,
}) => {
  const isEdit = !!admin;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isActive: true,
  });

  useEffect(() => {
    if (admin) {
      setFormData({
        name: admin.name || "",
        email: admin.email || "",
        password: "",
        isActive: admin.isActive,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        password: "",
        isActive: true,
      });
    }
  }, [admin]);

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return alert("Name is required");
    }

    if (!formData.email.trim()) {
      return alert("Email is required");
    }

    if (
      !isEdit &&
      !formData.password.trim()
    ) {
      return alert("Password is required");
    }

    // Build payload based on operation
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
    };

    // Send password only if entered
    if (formData.password.trim()) {
      payload.password =
        formData.password.trim();
    }

    // Only send isActive while editing
    if (isEdit) {
      payload.isActive = formData.isActive;
    }

    onSubmit(payload);
  };

  return (
    <div className="modal-overlay">
      <div className="admin-modal">
        <div className="modal-header">
          <h3>
            {isEdit
              ? "Edit Admin"
              : "Add Admin"}
          </h3>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>
              {isEdit
                ? "New Password (Optional)"
                : "Password"}
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={
                isEdit
                  ? "Leave blank to keep current password"
                  : "Enter password"
              }
            />
          </div>

          {isEdit && (
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="isActive"
                  checked={
                    formData.isActive
                  }
                  onChange={handleChange}
                />
                Active
              </label>
            </div>
          )}

          <div className="modal-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              {isEdit
                ? "Update Admin"
                : "Create Admin"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminModal;