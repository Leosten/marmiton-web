angular.module('marmiton').controller('ingredientsWindowController', ['$scope', "$http", function($scope, $http) {

	ingredients_url = "http://127.0.0.1/api/listrecipes/getIngredients.php?recipeid=".concat($scope.recipeid);

	$http.get(ingredients_url).then(function (response){
	        $scope.ingredients_obj = response.data;
	    }, function() {
	        console.log("unable to obtain API data: ingredients! ;)");
	    });
}]);