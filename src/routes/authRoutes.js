/*
  Filename: crsroutes.js
  Student's Name: Abhijit Singh
  Student ID: 200533462
  Date: 16-11-2023
*/
const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router()

// Signup route
router.post('/register', authController.registerUser);
  
// Login route
router.post('/login', authController.loginUser);

// Profile route
router.get('/profile/:email', authController.getUserProfile);

const authenticateUser = require('../middleware/authMiddleware');

// Endpoint to check user authentication status
router.get('/checkAuthentication', authenticateUser, authController.checkAuthentication);


module.exports = router