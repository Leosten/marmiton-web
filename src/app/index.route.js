(function() {
  'use strict';

  angular
    .module('marmiton')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('createrecipe', {
        url: '/createrecipe',
        templateUrl: 'app/main/createrecipe.html',
        controller: 'NewRecipe',
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
