import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { ROLES } from "../constants/roles.js";

const createAdmin = async (adminData) => {
  const existingUser = await User.findOne({
    email: adminData.email.toLowerCase(),
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const admin = new User({
    name: adminData.name,
    email: adminData.email.toLowerCase(),
    password: adminData.password,
    role: ROLES.ADMIN,
    isActive: true,
  });

  await admin.save();

  return {
    id: admin._id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
    isActive: admin.isActive,
    createdAt: admin.createdAt,
  };
};

const getAdmins = async () => {
  return await User.find({
    role: ROLES.ADMIN,
  }).select("-password");
};

const getAdminById = async (id) => {
  const admin = await User.findOne({
    _id: id,
    role: ROLES.ADMIN,
  }).select("-password");

  if (!admin) {
    throw new Error("Admin not found");
  }

  return admin;
};

const updateAdmin = async (id, data) => {
  const admin = await User.findOne({
    _id: id,
    role: ROLES.ADMIN,
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  if (data.name) admin.name = data.name;

  if (data.email) admin.email = data.email.toLowerCase();

  if (data.password) admin.password = data.password;

  if (typeof data.isActive === "boolean") {
    admin.isActive = data.isActive;
  }

  await admin.save();

  return {
    id: admin._id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
    isActive: admin.isActive,
    updatedAt: admin.updatedAt,
  };
};

const deleteAdmin = async (id) => {
  const admin = await User.findOne({
    _id: id,
    role: ROLES.ADMIN,
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  await admin.deleteOne();

  return {
    message: "Admin deleted successfully",
  };
};

const changePassword = async (
  userId,
  currentPassword,
  newPassword
) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(
    currentPassword,
    user.password
  );

  if (!isMatch) {
    throw new Error("Current password is incorrect");
  }

  user.password = newPassword;

  await user.save();

  return {
    message: "Password changed successfully",
  };
};

const resetAdminPassword = async (
  adminId,
  newPassword
) => {
  const admin = await User.findOne({
    _id: adminId,
    role: ROLES.ADMIN,
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  admin.password = newPassword;

  await admin.save();

  return {
    message: "Password reset successfully",
  };
};

export default {
  createAdmin,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  changePassword,
  resetAdminPassword,
};