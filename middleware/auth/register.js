var passport = require('passport');
var User = require('../../models/user');

module.exports = function (req, res, next) {
	User.register(
		new User({
			username: req.body.username,
			email: req.body.email
		}),
		req.body.password,
		function (err, user) {
			if (err) console.log(err);
			if (err) return res.render('auth/register');

			req.user = user;

			return next();
		}
	)
}