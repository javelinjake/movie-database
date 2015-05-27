var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http) {
	
	var apiKey = "6764e7d01eed27ecf7a022450cfb2ce0";
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(dd<10) { dd='0'+dd } if(mm<10) { mm='0'+mm } today = yyyy+'-'+mm+'-'+dd;
	
	$http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&release_date.lte='+ today +'&vote_average.gte=8&vote_count.gte=20&sort_by=vote_average.desc').
	success(function(data, status, headers, config) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.data = data;
	}).
	error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});
	
});