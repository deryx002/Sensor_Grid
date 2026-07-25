import axiosInstance from "./axios";

const getDashboardStats = async () => {
  const response = await axiosInstance.get("/dashboard");
  return response.data;
};

export default {
  getDashboardStats,
};