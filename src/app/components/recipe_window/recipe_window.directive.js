(function() {
  'use strict';

angular
	.module('marmiton')
	.directive('recipeWindow', recipeWindow);

	/** @ngInject */
function recipeWindow() {
	var directive = {
		restrict: 'E',
		templateUrl: 'app/components/recipe_window/recipeWindow.html',
		scope: {
		},
      	controller: recipeWindowController,
      	controllerAs: 'vm',
      	bindToController: true
    	};

    return directive;

    /** @ngInject */
    function recipeWindow() {
      	var vm = this;
	}
}

})();