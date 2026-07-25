import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import User from "../models/User.js";
import { ROLES } from "../constants/roles.js";

dotenv.config();

const seedSuperAdmin = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Check if Super Admin already exists
    const existingAdmin = await User.findOne({
      email: "admin@sensorgrid.com",
    });

    if (existingAdmin) {
      console.log("⚠️ Super Admin already exists.");
      process.exit(0);
    }

    // Create Super Admin
    const superAdmin = new User({
      name: "Super Admin",
      email: "admin@sensorgrid.com",
      password: "Admin@123",
      role: ROLES.SUPER_ADMIN,
      isActive: true,
    });

    await superAdmin.save();

    console.log("✅ Super Admin created successfully.");
    console.log("--------------------------------------");
    console.log("Email    : admin@sensorgrid.com");
    console.log("Password : Admin@123");
    console.log("Role     :", ROLES.SUPER_ADMIN);
    console.log("--------------------------------------");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeder Error:");
    console.error(error);
  }
};

seedSuperAdmin();