var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http) {
	
	var apiKey = "6764e7d01eed27ecf7a022450cfb2ce0";
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(dd<10) { dd='0'+dd } if(mm<10) { mm='0'+mm } today = yyyy+'-'+mm+'-'+dd;
	
	$scope.filter1 = '&release_date.lte='+ today +'&vote_average.gte=8&vote_count.gte=20&sort_by=vote_average.desc';
	$scope.filter2 = '&release_date.lte='+ today +'&vote_average.lte=5&vote_count.gte=20&sort_by=vote_average.asc';
	$scope.filter3 = '&release_date.gte='+ today +'&vote_count.gte=20&sort_by=vote_average.desc';
	$scope.filter4 = '&release_date.lte='+ today +'&vote_average.gte=7&popularity.desc';
	
	$scope.moviePageTrue = false;
	
	$scope.filters = function(filter) {
		$http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + filter).
		success(function(data, status, headers, config) {
			$scope.movies = data;
		}).
		error(function(data, status, headers, config) {
			
		});
	};
	
	$scope.moviePage = function(movieId) {
		$http.get('https://api.themoviedb.org/3/movie/'+ movieId +'?api_key=' + apiKey).
		success(function(data, status, headers, config) {
			$scope.movieData = data;
		}).
		error(function(data, status, headers, config) {
			
		});
		
		$scope.moviePageTrue = true;
		window.scrollTo(0, 0);
	}
	
	$scope.hideMoviePage = function() {
		$scope.moviePageTrue = false;
	}
	
});