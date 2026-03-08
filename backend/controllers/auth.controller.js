const User = require("../models/user.model");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcrypt");
const { signupSchema, loginSchema } = require("../validators/user.validation");

//--->> SIGNUP
exports.signup = async (req, res) => {
  try {
    const { error } = signupSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        success: false,
        errors: error.details.map((err) => err.message),
      });
    }

    const { firstName, lastName, email, password } = req.body;

    const normalizedEmail = email?.toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        field: "email",
        message: "An account with this email already exists.",
      });
    }

    const user = await User.create({
      firstName,
      lastName,
      email: normalizedEmail,
      password,
      isVerified: true,
    });

    const token = generateToken(user);

    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//--->> LOGIN
exports.login = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        success: false,
        errors: error.details.map((err) => err.message),
      });
    }

    const { email, password } = req.body;

    const normalizedEmail = email?.toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = generateToken(user);

    res.json({
      success: true,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
