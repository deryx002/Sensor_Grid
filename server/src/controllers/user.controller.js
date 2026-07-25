import userService from "../services/user.service.js";
import {
  createAdminValidation,
  updateAdminValidation,
} from "../validations/user.validation.js";

const createAdmin = async (req, res) => {
  try {
    const { error } = createAdminValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const admin = await userService.createAdmin(req.body);

    return res.status(201).json({
      success: true,
      message: "Admin created successfully",
      data: admin,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAdmins = async (req, res) => {
  try {
    const admins = await userService.getAdmins();

    return res.status(200).json({
      success: true,
      count: admins.length,
      data: admins,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAdminById = async (req, res) => {
  try {
    const admin = await userService.getAdminById(req.params.id);

    return res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const { error } = updateAdminValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const admin = await userService.updateAdmin(
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Admin updated successfully",
      data: admin,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const result = await userService.deleteAdmin(req.params.id);

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const result = await userService.changePassword(
      req.user.id,
      currentPassword,
      newPassword
    );

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;

    const result = await userService.resetAdminPassword(
      req.params.id,
      newPassword
    );

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  createAdmin,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  changePassword,
  resetPassword,
};