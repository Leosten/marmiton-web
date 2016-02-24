angular.module('marmiton').controller('advancedSearchController', ['$scope', "$http", function($scope, $http) {

$scope.search_recipes = {};
search_recipe_url 			  = "http://127.0.0.1/api/listrecipes/advancedSearch.php";
$scope.to_search			  = null;

$scope.reverseOrder  = "orderBy: 'ID'";
$scope.limitChange 	 = 10;
$scope.toggleList	 = ['nom','categorie','tags','ingredients']


$scope.searchControls = function (option) {

}

$http.get(search_recipe_url).then(function (response){
        $scope.search_recipes = response.data;
    }, function() {
        $scope.error("unable to obtain API data: recipe_details! ;)");
    });
}]);