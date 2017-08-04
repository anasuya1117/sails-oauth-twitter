
var passport = require('passport');

module.exports = function(req, res, next) {
	return passport.authenticate('twitter', {failureRedirect: '/auth/error'})(req, res, next);
};