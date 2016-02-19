
(function() {
  'use strict';

  angular
    .module('marmiton')
    .controller('MainController', ['$scope', 'recipeListFactory', function($scope, recipeListFactory){
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


}]);
})();
