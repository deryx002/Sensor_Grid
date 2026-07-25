import { body, validationResult } from "express-validator";

export const contactValidationRules = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full Name is required.")
    .isLength({ min: 3, max: 100 })
    .withMessage("Full Name must be between 3 and 100 characters."),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Please enter a valid email address.")
    .normalizeEmail(),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required.")
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone number must be between 10 and 15 characters."),

  body("schoolCollege")
    .trim()
    .notEmpty()
    .withMessage("School / College is required.")
    .isLength({ min: 3, max: 150 })
    .withMessage("School / College must be between 3 and 150 characters."),

  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required."),

  body("projectType")
    .trim()
    .notEmpty()
    .withMessage("Project Type is required."),

  body("projectDescription")
    .trim()
    .notEmpty()
    .withMessage("Project Description is required.")
    .isLength({ min: 20, max: 3000 })
    .withMessage(
      "Project Description must be between 20 and 3000 characters."
    ),
];

export const validateContact = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: errors.array(),
    });
  }

  next();
};