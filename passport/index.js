


const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const db = require('../models/index');


passport.serializeUser((user, done) => {
	done(null, { _id: user._id });
});
passport.deserializeUser((id, done) => {
	db.User.findOne(
		{ _id: id },
		'username',
		(err, user) => {
			done(null, user);
		}
	);
});
// Register Strategies
passport.use(LocalStrategy);
module.exports = passport; 