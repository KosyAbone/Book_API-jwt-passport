/*
  Filename: crsModel.js
  Student's Name: Ilham Sheikh
  Student ID: 200557496
  Date: 16-11-2023
*/
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'Enter your first name'
    },
    lastName: {
        type: String,
        required: 'Enter your last name'
    },
    email: { 
        type: String, 
        required: "Choose a valid email address", 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
