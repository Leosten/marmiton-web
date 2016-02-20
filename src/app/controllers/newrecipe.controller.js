//var app = angular.module('marmiton');

angular.module('marmiton').controller('NewRecipe', ['$scope', 'recipeListFactory', function($scope, recipeListFactory) {
    	
		$scope.createrecipe = function() {
        $scope.spice = 'chili';
    };

    $scope.recipe = {};

    
    
}]);


   //  $http.post(url, data, config)
   // .then(
   //     function(response){
   //       // success callback
   //     }, 
   //     function(response){
   //       // failure callback
   //     }
   //  );