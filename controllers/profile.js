var express = require('express');
var router = express.Router();
var needsAuth = require('../middleware/auth/needsAuth');

router.get('/', needsAuth, function (req, res) {
	res.render('profile');
});

module.exports = router;