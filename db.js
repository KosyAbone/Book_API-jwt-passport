/*
  Filename: crsModel.js
  Author: Kosisochukwu Abone
  Date: 16-11-2023
*/

require('dotenv').config()
const mongoose = require('mongoose');
const { MONGO_URL } = process.env

const InitializeDB = () => {
    // Connecting to the database
    mongoose
      .connect(MONGO_URL)
      .then(() => {
        console.log("Successfully connected to database"); 
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
};

module.exports = InitializeDB;