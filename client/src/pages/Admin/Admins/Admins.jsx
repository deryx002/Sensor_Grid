import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import "./Admins.css";

import AdminTable from "./AdminTable";
import AdminModal from "./AdminModal";
import ChangePasswordModal from "./ChangePasswordModal";
import ResetPasswordModal from "./ResetPasswordModal";

import {
  getAllAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} from "../../../services/userService";

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [filteredAdmins, setFilteredAdmins] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [showChangePassword, setShowChangePassword] =
    useState(false);
  const [showResetPassword, setShowResetPassword] =
    useState(false);

  const [selectedAdmin, setSelectedAdmin] =
    useState(null);

  // Logged in user
  const loggedInAdmin = JSON.parse(
    localStorage.getItem("admin")
  );

  const isSuperAdmin =
    loggedInAdmin?.role === "SUPER_ADMIN";

  const fetchAdmins = async () => {
    try {
      setLoading(true);

      const response = await getAllAdmins();

      setAdmins(response.data);
      setFilteredAdmins(response.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch admins"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  useEffect(() => {
    const value = search.toLowerCase();

    const filtered = admins.filter(
      (admin) =>
        admin.name.toLowerCase().includes(value) ||
        admin.email.toLowerCase().includes(value)
    );

    setFilteredAdmins(filtered);
  }, [search, admins]);

  const handleAdd = () => {
    setSelectedAdmin(null);
    setShowModal(true);
  };

  const handleEdit = (admin) => {
    setSelectedAdmin(admin);
    setShowModal(true);
  };

  const handleDelete = async (admin) => {
    const confirmed = window.confirm(
      `Delete ${admin.name}?`
    );

    if (!confirmed) return;

    try {
      await deleteAdmin(admin._id);

      toast.success("Admin deleted successfully");

      fetchAdmins();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed"
      );
    }
  };

  const handleResetPassword = (admin) => {
    setSelectedAdmin(admin);
    setShowResetPassword(true);
  };

  const handleSubmit = async (formData) => {
    try {
      if (selectedAdmin) {
        await updateAdmin(
          selectedAdmin._id,
          formData
        );

        toast.success(
          "Admin updated successfully"
        );
      } else {
        await createAdmin(formData);

        toast.success(
          "Admin created successfully"
        );
      }

      setShowModal(false);

      fetchAdmins();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Operation failed"
      );
    }
  };

  return (
    <div className="admins-page">
      <div className="admins-header">
        <div>
          <h2>Admin Management</h2>
          <p>Manage system administrators</p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            className="add-admin-btn"
            onClick={() =>
              setShowChangePassword(true)
            }
          >
            Change Password
          </button>

          {isSuperAdmin && (
            <button
              className="add-admin-btn"
              onClick={handleAdd}
            >
              + Add Admin
            </button>
          )}
        </div>
      </div>

      <div className="admins-toolbar">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <AdminTable
        admins={filteredAdmins}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onResetPassword={
          handleResetPassword
        }
        isSuperAdmin={isSuperAdmin}
      />

      {showModal && (
        <AdminModal
          admin={selectedAdmin}
          onClose={() =>
            setShowModal(false)
          }
          onSubmit={handleSubmit}
        />
      )}

      {showChangePassword && (
        <ChangePasswordModal
          onClose={() =>
            setShowChangePassword(false)
          }
        />
      )}

      {showResetPassword &&
        isSuperAdmin && (
          <ResetPasswordModal
            admin={selectedAdmin}
            onClose={() =>
              setShowResetPassword(false)
            }
            onSuccess={fetchAdmins}
          />
        )}
    </div>
  );
};

export default Admins;