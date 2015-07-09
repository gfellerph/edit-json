var app = require('app');

app.directive('save', [
	function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				element.on('click', function (e) {
					console.log(e);
					console.log(scope.kings);
				});
			}
		}
	}
]);