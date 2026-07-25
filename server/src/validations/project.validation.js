import Joi from "joi";

export const createProjectValidation = Joi.object({
  fullName: Joi.string().trim().required().messages({
    "string.empty": "Full Name is required",
    "any.required": "Full Name is required",
  }),

  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address",
    "string.empty": "Email Address is required",
    "any.required": "Email Address is required",
  }),

  contactNumber: Joi.string().trim().required().messages({
    "string.empty": "Contact Number is required",
    "any.required": "Contact Number is required",
  }),

  serviceCategory: Joi.string()
    .valid("Software", "IoT", "Designing")
    .required()
    .messages({
      "string.empty": "Service Category is required",
      "any.only": "Service Category must be Software, IoT, or Designing",
      "any.required": "Service Category is required",
    }),

  projectType: Joi.string().trim().required().messages({
    "string.empty": "Project Type is required",
    "any.required": "Project Type is required",
  }),

  projectTitle: Joi.string().trim().required().messages({
    "string.empty": "Project Title is required",
    "any.required": "Project Title is required",
  }),

  projectDescription: Joi.string().trim().required().messages({
    "string.empty": "Project Description is required",
    "any.required": "Project Description is required",
  }),
});

export const updateProjectValidation = Joi.object({
  fullName: Joi.string().trim(),

  email: Joi.string().email().messages({
    "string.email": "Please provide a valid email address",
  }),

  contactNumber: Joi.string().trim(),

  serviceCategory: Joi.string()
    .valid("Software", "IoT", "Designing")
    .messages({
      "any.only": "Service Category must be Software, IoT, or Designing",
    }),

  projectType: Joi.string().trim(),

  projectTitle: Joi.string().trim(),

  projectDescription: Joi.string().trim(),

  status: Joi.string()
    .valid(
      "NEW",
      "CONTACTED",
      "IN_PROGRESS",
      "COMPLETED",
      "REJECTED"
    )
    .messages({
      "any.only":
        "Status must be NEW, CONTACTED, IN_PROGRESS, COMPLETED, or REJECTED",
    }),
}).min(1);