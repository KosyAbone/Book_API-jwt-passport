/*
  Filename: controller.js
  Author: Kosisochukwu Abone
  Date: 16-11-2023
*/
const passport = require('../config/passport-config');

const authenticateUser = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Unauthorized - ' + info.message, success: false });
    }

    req.user = user;
    next();
  })(req, res, next);
};

module.exports = authenticateUser;