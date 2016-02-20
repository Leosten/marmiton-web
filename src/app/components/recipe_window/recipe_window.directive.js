angular
	.module('marmiton').directive("recipeWindow", function(){
    return {
        restrict: "E",
        scope: false,
        templateUrl: 'app/components/recipe_window/recipe_window.html',
    };
});