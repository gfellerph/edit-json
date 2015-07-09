module.exports = function (req, res, next) {
	req.logout();
	return next();
}