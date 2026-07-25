import express from "express";
import dashboardController from "../controllers/dashboard.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import { ROLES } from "../constants/roles.js";

const router = express.Router();

// Dashboard Statistics
router.get(
  "/",
  authMiddleware,
  roleMiddleware(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  dashboardController.getDashboardStats
);

export default router;