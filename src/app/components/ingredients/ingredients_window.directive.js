angular
	.module('marmiton').directive("ingredientsWindow", function(){
    return {
        restrict: "E",
        scope: false,
        controller: "ingredientsWindowController",
        templateUrl: 'app/components/ingredients/ingredients_window.html',
    };
});