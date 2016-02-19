(function() {
  'use strict';

  angular
    .module('marmiton')
    .config(config);

  /** @ngInject */
  function config($logProvider, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
