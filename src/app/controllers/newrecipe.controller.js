//var app = angular.module('marmiton');

angular.module('marmiton').controller('NewRecipe', ['$scope', 'recipeListFactory', function($scope, recipeListFactory) {
    	
		$scope.createrecipe = function() {
        $scope.spice = 'chili';
    };
    

    $http.post(url, data, config)
   .then(
       function(response){
         // success callback
       }, 
       function(response){
         // failure callback
       }
    );
   
    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
}]);