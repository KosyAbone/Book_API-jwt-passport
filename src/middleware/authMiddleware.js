import passport from '../config/passport-config';

const authenticateUser = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Unauthorized - ' + info.message, success: false });
    }

    req.user = user;
    next();
  })(req, res, next);
};

export { authenticateUser };