import { useState } from "react";
import toast from "react-hot-toast";

import { resetPassword } from "../../../services/userService";

const ResetPasswordModal = ({ admin, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.newPassword || !formData.confirmPassword) {
      return toast.error("All fields are required");
    }

    if (formData.newPassword.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    if (formData.newPassword !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      await resetPassword(admin._id, formData.newPassword);

      toast.success("Password reset successfully");

      onSuccess?.();
      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to reset password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="admin-modal">
        <div className="modal-header">
          <h3>Reset Password</h3>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <p style={{ marginBottom: "20px" }}>
          Reset password for <strong>{admin?.name}</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>New Password</label>

            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

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
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordModal;