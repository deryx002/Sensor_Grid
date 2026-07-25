import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import User from "./models/User.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existingAdmin = await User.findOne({
      email: "admin@sensorgrid.com",
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("12345678", 10);

    await User.create({
      name: "Admin",
      email: "admin@sensorgrid.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin created successfully.");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();