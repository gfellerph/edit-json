var app = require('../app');
var angular = require('angular');

app.controller('EditController', [
	'$scope',
	'$http',
	function ($scope, $http) {
		$scope.kings = [];

		var req = $http.get('/json/royal.json');
		req.success(function (data) {
			$scope.kings = data;
			$scope.keys = Object.keys(data);
		});

		$scope.getKeys = function (obj) {
			obj = angular.copy(obj);
			return Object.keys(obj);
		}
	}
]);