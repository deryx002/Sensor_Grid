import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

const login = async (email, password) => {
  // Find user
  const user = await User.findOne({
    email: email.toLowerCase(),
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Check account status
  if (!user.isActive) {
    throw new Error("Your account has been deactivated");
  }

  // Compare password
  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  // Generate token
  const token = generateToken(user);

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  };
};

const getProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export default {
  login,
  getProfile,
};