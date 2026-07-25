import Project from "../models/Project.js";

const createProject = async (projectData) => {
  const project = await Project.create(projectData);

  return project;
};

const getProjects = async () => {
  return await Project.find().sort({ createdAt: -1 });
};

const getProjectById = async (id) => {
  const project = await Project.findById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  return project;
};

const updateProject = async (id, updateData) => {
  const project = await Project.findById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  Object.assign(project, updateData);

  await project.save();

  return project;
};

const deleteProject = async (id) => {
  const project = await Project.findById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  await project.deleteOne();

  return true;
};

export default {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};