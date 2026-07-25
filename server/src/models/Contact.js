import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    schoolCollege: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    projectType: {
      type: String,
      required: true,
      trim: true,
    },

    projectDescription: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
      maxlength: 3000,
    },

    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "In Progress",
        "Completed",
      ],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Contact", contactSchema);