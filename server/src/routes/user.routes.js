import express from "express";

import userController from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import { ROLES } from "../constants/roles.js";

const router = express.Router();

/*
    Base URL
    /api/users
*/

// Create Admin
router.post(
  "/admin",
  authMiddleware,
  roleMiddleware(ROLES.SUPER_ADMIN),
  userController.createAdmin
);

// Get All Admins
router.get(
  "/admins",
  authMiddleware,
  roleMiddleware(ROLES.SUPER_ADMIN),
  userController.getAdmins
);

// Get Admin By ID
router.get(
  "/:id",
  authMiddleware,
  roleMiddleware(ROLES.SUPER_ADMIN),
  userController.getAdminById
);

// Update Admin
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(ROLES.SUPER_ADMIN),
  userController.updateAdmin
);

// Delete Admin
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(ROLES.SUPER_ADMIN),
  userController.deleteAdmin
);

// Change own password
router.put(
  "/change-password",
  authMiddleware,
  userController.changePassword
);

// Reset admin password (SUPER_ADMIN only)
router.put(
  "/:id/reset-password",
  authMiddleware,
  roleMiddleware(ROLES.SUPER_ADMIN),
  userController.resetPassword
);

export default router;