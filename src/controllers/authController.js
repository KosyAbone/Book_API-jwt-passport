/*
  Filename: controller.js
  Student's Name: Kosisochukwu Abone
  Student ID: 200569052
  Date: 16-11-2023
*/
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
require('dotenv').config();

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    //check if any field is empty
    if(!(firstName && lastName && email && password)){
      return res.status(409).json({message: "Some fields are empty"})
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists, please Login' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ ...req.body, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', newUser, success: true });
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Email doesn't exist" });
    }

    // Check if the password matches
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Wrong Password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '48h' });

    res.status(200).json({message: 'Login Successful', token, email, success: true });
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const email = req.params.email;
    
    const user = await User.findOne({ email });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error: ' + error.message  });
  }
};

// Endpoint to check user authentication status
const checkAuthentication = async (req, res) => {
  res.status(200).json({ authenticated: true, user: req.user });
  // 'req.user' will contain the authenticated user information, it's sent back to the client
};

module.exports = { registerUser, loginUser, getUserProfile, checkAuthentication };