import express from "express";

import {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
} from "../controllers/contactController.js";

import {
  contactValidationRules,
  validateContact,
} from "../validations/contactValidator.js";

const router = express.Router();

/**
 * Public Route
 */

// Submit Contact Form
router.post(
  "/",
  contactValidationRules,
  validateContact,
  createContact
);

/**
 * Admin Routes
 */

// Get All Contacts
router.get("/", getAllContacts);

// Get Single Contact
router.get("/:id", getContactById);

// Update Contact Status
router.patch("/:id/status", updateContactStatus);

// Delete Contact
router.delete("/:id", deleteContact);

export default router;