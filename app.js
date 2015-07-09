var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var controllers  = require('./controllers');
var flash        = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var passport     = require('passport');
var config       = require('./config');
var mongoose     = require('mongoose');

var app = express();

// Database
mongoose.connect(config.mongoose.url);

// Authentication

// View engine setup
app.locals.pretty = true;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Set paths
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

// Parser
app.use(cookieParser());
app.use(bodyParser());

// Passport
app.use(session({ secret: 'so_privacy.very_security.such_secret.wow.'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Imports
app.use(controllers);

module.exports = app;