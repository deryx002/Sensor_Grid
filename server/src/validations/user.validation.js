import Joi from "joi";

export const createAdminValidation = Joi.object({
  name: Joi.string()
    .trim()
    .min(3)
    .max(50)
    .required()
    .messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 3 characters",
      "string.max": "Name cannot exceed 50 characters",
      "any.required": "Name is required",
    }),

  email: Joi.string()
    .email()
    .trim()
    .lowercase()
    .required()
    .messages({
      "string.email": "Enter a valid email",
      "string.empty": "Email is required",
      "any.required": "Email is required",
    }),

  password: Joi.string()
    .min(6)
    .required()
    .messages({
      "string.min": "Password must be at least 6 characters",
      "string.empty": "Password is required",
      "any.required": "Password is required",
    }),
});

export const updateAdminValidation = Joi.object({
  name: Joi.string().trim().min(3).max(50),

  email: Joi.string().email().trim().lowercase(),

  password: Joi.string().min(6),

  isActive: Joi.boolean(),
}).min(1);