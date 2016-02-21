angular.module('marmiton').controller('NewRecipe', ['$scope', 'recipeListFactory', function($scope, recipeListFactory) {
    $scope.newrecipe = {};
    recipe = {}
    ingredient = {};
    $scope.ingredients_list = [];

    $scope.submitRecipe = function() {
      recipe = {
        nom: $scope.recipe_name,
        difficulte: $scope.difficulty,
        categorie: $scope.category,
        tags: $scope.optionaltags,
      }
    }

    $scope.addIngredient = function() {
        ingredient = {
        nom: $scope.ingredient_name,
        quantite: $scope.ingredient_quantity,
        unite: $scope.ingredient_unit
      };
      if (ingredient.nom == undefined || ingredient.quantite == undefined) {
        $scope.error = "Ingrédients invalides!" 
      } else {
        $scope.error = null;
        $scope.ingredient_name = null;
        $scope.ingredient_quantity = null;
        $scope.ingredient_unit = null;
        $scope.ingredients_list = $scope.ingredients_list.concat(ingredient);
        console.log($scope.ingredients_list);
      }
    };
    
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