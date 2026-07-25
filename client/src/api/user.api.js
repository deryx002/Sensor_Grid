import axiosInstance from "./axios";

const createAdmin = async (data) => {
  const response = await axiosInstance.post("/users/admin", data);
  return response.data;
};

const getAdmins = async () => {
  const response = await axiosInstance.get("/users/admins");
  return response.data;
};

const getAdminById = async (id) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

const updateAdmin = async (id, data) => {
  const response = await axiosInstance.put(`/users/${id}`, data);
  return response.data;
};

const deleteAdmin = async (id) => {
  const response = await axiosInstance.delete(`/users/${id}`);
  return response.data;
};

export default {
  createAdmin,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};