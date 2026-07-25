import express from "express";
import projectController from "../controllers/project.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import { ROLES } from "../constants/roles.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Route
|--------------------------------------------------------------------------
*/

// Submit Project Request
router.post("/", projectController.createProject);

/*
|--------------------------------------------------------------------------
| Protected Admin Routes
|--------------------------------------------------------------------------
*/

// Get All Project Requests
router.get(
  "/",
  authMiddleware,
  roleMiddleware(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  projectController.getProjects
);

// Get Project Request By ID
router.get(
  "/:id",
  authMiddleware,
  roleMiddleware(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  projectController.getProjectById
);

// Update Project Request
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  projectController.updateProject
);

// Delete Project Request
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(ROLES.SUPER_ADMIN),
  projectController.deleteProject
);

export default router;