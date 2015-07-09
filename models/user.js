var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var passportLocalMongoose = require('passport-local-mongoose');

// Define user schema
var userSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String
});

userSchema.plugin(passportLocalMongoose);

// Create user model and expose it to the app
module.exports = mongoose.model('User', userSchema);