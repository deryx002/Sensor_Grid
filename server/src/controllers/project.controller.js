import projectService from "../services/project.service.js";
import {
  createProjectValidation,
  updateProjectValidation,
} from "../validations/project.validation.js";

const createProject = async (req, res) => {
  try {
    const { error } = createProjectValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const project = await projectService.createProject(req.body);

    return res.status(201).json({
      success: true,
      message: "Project request submitted successfully",
      data: project,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await projectService.getProjects();

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await projectService.getProjectById(req.params.id);

    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const { error } = updateProjectValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const project = await projectService.updateProject(
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    await projectService.deleteProject(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

export default {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};