var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');

// Login
// =====================================
router.get('/', function (req, res) {
	res.render('auth/login', { message: req.flash('loginMessage') });
});

router.get('/login', function (req, res) {
	res.render('auth/login', { message: req.flash('loginMessage') });
});

/*router.post('/login', auth.login, function (req, res) {

});*/

// Register
// =====================================
router.get('/register', function (req, res) {
	res.render('auth/register', { message: req.flash('reigsterMessage') });
});

router.post('/register', auth.register, function (req, res) {
	res.redirect('profile', {user: req.user});
});

// Logout
// =====================================
/*router.get('/logout', auth.logout, function (req, res) {
	res.redirect('/');
});*/

module.exports = router;