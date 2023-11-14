import express from "express";
import { registerUser, loginUser } from '../controllers/authController';
const router = express.Router()

// Signup route
router.post('/register', registerUser);
  
// Login route
router.post('/login', loginUser);


export default router