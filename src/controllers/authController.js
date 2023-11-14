import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel';
require('dotenv').config();

export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
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


export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });
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

    res.status(200).json({message: 'Login Successful', token, success: true });
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
};
