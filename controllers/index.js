var express = require('express');
var router = express.Router();
var auth = require('./auth');
var profile = require('./profile');

// Index route
router.get('/', function (req, res) {
	res.render('index', {title: 'Index'});
});

// Other routes
router.use('/auth', auth);
router.use('/profile', profile);

module.exports = router;