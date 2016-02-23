angular.module('marmiton').controller('userCommentsController', ['$scope', '$stateParams', "$http", function($scope, $stateParams, $http) {
$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
$scope.recipeid 	  	= $stateParams.recipeid;
$scope.evaluation_list  = ["1", "2", "3", "4", "5"];
$scope.new_rating  		= "3";
$scope.new_comment 		= null;
new_user_comment 		= {};
$scope.user_comments 	= [];
user_comments_url     = "http://127.0.0.1/api/listrecipes/getUserComments.php?recipeid=".concat($scope.recipeid);

$http.get(user_comments_url).then(function (response){
        $scope.user_comments = response.data;
        console.log($scope.user_comments);
    }, function() {
        $scope.error("unable to obtain API data: recipe_details! ;)");
    });

$scope.submitUserComment = function() {
	new_user_comment = {
		pseudo: $scope.new_pseudo,
		texte: $scope.new_comment,
		rating:$scope.new_rating,
		ID_recette: $scope.recipeid
	};
	if ($scope.new_comment == null || $scope.new_pseudo == null) {
		$scope.error = "Entrez un pseudo et un commentaire pour envoyer!"
	} else {
		$scope.error = null;
		$http({
			url: 'http://127.0.0.1/api/createrecipe/insertUserComments.php',
			method: "POST",
			data: new_user_comment,
			}).then(function(response) {
				$scope.errorResponse = "Recette créee avec succès!";
				// $scope.location.path("/recipepage/".concat($scope.recipeid));
			},
			function () {
				$scope.errorResponse = "Impossible d'envoyer le commentaire!"
			})
	}
}
}]);