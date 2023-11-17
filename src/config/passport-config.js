/*
  Filename: controller.js
  Student's Name: Kosisochukwu Abone
  Student ID: 200569052
  Date: 16-11-2023
*/
const passport = require('passport'); // Passport for authentication
const JwtStrategy = require('passport-jwt').Strategy; // JWT Strategy for Passport
const ExtractJwt = require('passport-jwt').ExtractJwt; // Extract JWT from header
const User = require('../models/userModel');
require('dotenv').config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      const user = await User.findById(jwtPayload.id);

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = passport;
