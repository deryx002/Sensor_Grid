import Contact from "../models/Contact.js";

/**
 * @desc    Create a new contact inquiry
 * @route   POST /api/contact
 * @access  Public
 */
export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Your inquiry has been submitted successfully.",
      data: contact,
    });
  } catch (error) {
    console.error("Create Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit inquiry.",
    });
  }
};

/**
 * @desc    Get all contact inquiries
 * @route   GET /api/contact
 * @access  Admin
 */
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("Get Contacts Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch contacts.",
    });
  }
};

/**
 * @desc    Get single contact
 * @route   GET /api/contact/:id
 * @access  Admin
 */
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Get Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch contact.",
    });
  }
};

/**
 * @desc    Update contact status
 * @route   PATCH /api/contact/:id/status
 * @access  Admin
 */
export const updateContactStatus = async (
  req,
  res
) => {
  try {
    const { status } = req.body;

    const contact =
      await Contact.findByIdAndUpdate(
        req.params.id,
        { status },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully.",
      data: contact,
    });
  } catch (error) {
    console.error(
      "Update Contact Status Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to update status.",
    });
  }
};

/**
 * @desc    Delete contact
 * @route   DELETE /api/contact/:id
 * @access  Admin
 */
export const deleteContact = async (
  req,
  res
) => {
  try {
    const contact = await Contact.findById(
      req.params.id
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    await contact.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Contact deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete contact.",
    });
  }
};