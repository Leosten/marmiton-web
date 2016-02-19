angular.module('marmiton').factory('recipeListFactory', function($http){
	return{ get: $http.get('http://127.0.0.1/api/listrecipes/listRecipeName.php')};
});

//connection simple au fichier php qui envoie les noms des recettes dans la BDD
