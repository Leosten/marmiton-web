angular.module('marmiton').controller('ingredientsWindowController', ['$scope', '$http', function($scope, $http) {

	ingredients_url = "http://127.0.0.1/api/listrecipes/getIngredients.php?recipeid=".concat($scope.recipeid);

	$http.get(ingredients_url).then(function (response){
	        $scope.ingredients = response.data;
	        console.log($scope.ingredients);
	    }, function() {
	        console.log("unable to obtain API data: ingredients_window! ;)");
	    });
}]);