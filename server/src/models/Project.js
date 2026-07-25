import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email Address is required"],
      lowercase: true,
      trim: true,
    },

    contactNumber: {
      type: String,
      required: [true, "Contact Number is required"],
      trim: true,
    },

    serviceCategory: {
      type: String,
      enum: ["Software", "IoT", "Designing"],
      required: [true, "Service Category is required"],
    },

    projectType: {
      type: String,
      required: [true, "Project Type is required"],
      trim: true,
    },

    projectTitle: {
      type: String,
      required: [true, "Project Title is required"],
      trim: true,
    },

    projectDescription: {
      type: String,
      required: [true, "Project Description is required"],
      trim: true,
    },

    status: {
      type: String,
      enum: ["NEW", "CONTACTED", "IN_PROGRESS", "COMPLETED", "REJECTED"],
      default: "NEW",
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;