const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;

    if (!email) {
      throw new Error("Please enter your email address");
    }
    if (!password) {
      throw new Error("Please enter your password");
    }
    if (!name) {
      throw new Error("Please enter your full name");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const payload = {
      name,
      email,
      password: hashPassword,
    };

    const userData = new userModel(payload);
    const saveUser = await userData.save(); // Await the save operation

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User registration successful!!✅✅",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
