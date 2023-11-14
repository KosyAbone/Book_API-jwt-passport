import express from "express";
import { authenticateUser, registerUser } from '../middleware/authMiddleware';
const router = express.Router()

// Signup route
router.post('/register', registerUser);
  
// Login route
router.post('/login', authenticateUser, (req, res) => {
    res.json({ message: 'Login successful', success: true });
});

// Logout route
router.get('/logout', (req, res) => {
    req.logout(() => {}); // Passport function to terminate the login session
    res.json({ message: 'Logged out successfully', success: true });
  });

export default router