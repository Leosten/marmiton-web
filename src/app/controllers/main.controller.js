
(function() {
  'use strict';

  angular
    .module('marmiton')
    .controller('MainController', ['$scope', 'recipeListFactory', function($scope, recipeListFactory, ngAnimate){
  /** @ngInject */
  function MainController($timeout) {
    var vm = this;
  }

  $scope.recipes = {};

    //recupère les données du modèles, type promesse AJAX
  recipeListFactory.get.then(function(response) {
        $scope.recipes = response.data;
    }, function() {
        $scope.error = "unable to obtain API data";
    });

  // function sortRecipes(recipes) {
  //   sorted_recipes = Object.keys(recipes.ID).sort(function(a,b){return recipes.ID[a]-recipes.ID[b]});
  //   // arr.sort(function(a, b) { return a.value - b.value; });
  //   // //arr.sort(function(a, b) { a.value.toLowerCase().localeCompare(b.value.toLowerCase()); }); //use this to sort as strings
  //   return sorted_recipes; // returns array
  // }




}]);
})();
