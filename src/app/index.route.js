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
      .state('recipepage', {
        url: '/recipepage/{recipeid}',
        templateUrl: 'app/main/recipepage.html',
        controller: 'recipePage',
      })
      .state('advancedsearch', {
        url: '/advancedsearch',
        templateUrl: 'app/main/advancedsearch.html',
        controller: 'advancedSearchController',
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
