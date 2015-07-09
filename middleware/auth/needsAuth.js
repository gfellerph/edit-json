module.exports = function (req, res, next) {

	// Pass through if authenticated
	if (req.isAuthenticated()) return next();

	// Redirect to login page if not
	res.redirect('/auth/login');
}