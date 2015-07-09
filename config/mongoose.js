var user = 'jules-winnfield';
var pass = 'pulppulp';
var db = 'Ypijir8o';

module.exports = {
	url: [
		'mongodb://',
		user,
		':',
		pass,
		'@apollo.modulusmongo.net:27017/',
		db
	].join('')
}