//var app = angular.module('marmiton');

angular.module('marmiton').controller('NewRecipe', ['$scope', 'recipeListFactory', function($scope, recipeListFactory) {
    	
		$scope.createrecipe = function() {
        $scope.spice = 'chili';
    };
    
    $scope.listrecipe = response;
    // returndb.getRecipeList().then(function(response){
    //     $scope.calldb = response.data;
    // },
    // function (){
    //     $scope.calldb = "Unable to retrieve data";
    // }
    // );

    // returndb = getRecipeNames();

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
}]);