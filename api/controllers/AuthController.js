
/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
	twitter: passport.authenticate('twitter'),
	error: error
};

function error(req,res){
	return res.json({message: 'Welcome back'});
}

