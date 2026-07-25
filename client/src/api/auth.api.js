import axiosInstance from "./axios";

const login = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  return response.data;
};

const getProfile = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};

export default {
  login,
  getProfile,
};