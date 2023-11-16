/*
  Filename: crsModel.js
  Student's Name: Kosisochukwu Abone
  Student ID: 200569052
  Date: 13-11-2023
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
