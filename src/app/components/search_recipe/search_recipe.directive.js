angular
	.module('marmiton').directive("searchRecipe", function(){
    return {
        restrict: "E",
        scope: false,
        controller: 'searchRecipeController',
        templateUrl: 'app/components/search_recipe/search_recipe.html',
    };
});