import Contact from "../models/Contact.js";
import User from "../models/User.js";
import { ROLES } from "../constants/roles.js";

const getDashboardStats = async () => {
  const [
    totalProjects,
    newProjects,
    contactedProjects,
    inProgressProjects,
    completedProjects,
    totalAdmins,
  ] = await Promise.all([
    Contact.countDocuments(),

    Contact.countDocuments({
      status: "New",
    }),

    Contact.countDocuments({
      status: "Contacted",
    }),

    Contact.countDocuments({
      status: "In Progress",
    }),

    Contact.countDocuments({
      status: "Completed",
    }),

    User.countDocuments({
      role: ROLES.ADMIN,
    }),
  ]);

  return {
    totalProjects,
    newProjects,
    contactedProjects,
    inProgressProjects,
    completedProjects,
    rejectedProjects: 0,
    totalAdmins,
  };
};

export default {
  getDashboardStats,
};