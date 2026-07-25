import api from "../api/axios";

// ======================
// Admin CRUD
// ======================

export const getAllAdmins = async () => {
  const response = await api.get("/users/admins");
  return response.data;
};

export const getAdminById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const createAdmin = async (data) => {
  const response = await api.post("/users/admin", data);
  return response.data;
};

export const updateAdmin = async (id, data) => {
  const response = await api.put(`/users/${id}`, data);
  return response.data;
};

export const deleteAdmin = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

// ======================
// Password Management
// ======================

export const changePassword = async (data) => {
  const response = await api.put(
    "/users/change-password",
    data
  );

  return response.data;
};

export const resetPassword = async (
  id,
  newPassword
) => {
  const response = await api.put(
    `/users/${id}/reset-password`,
    {
      newPassword,
    }
  );

  return response.data;
};