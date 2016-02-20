angular.module('marmiton').controller('recipePage', ['$scope', '$stateParams', "$http", function($scope, $stateParams, $http) {

$scope.recipeid = $stateParams.recipeid;
$scope.recipe_details = {};
recipe_url = "http://127.0.0.1/api/listrecipes/getFullRecipe.php?recipeid=".concat($scope.recipeid);

$http.get(recipe_url).then(function (response){
        $scope.recipe_details = response.data;
    }, function() {
        console.log("unable to obtain API data: recipe_details! ;)");
    });
}]);