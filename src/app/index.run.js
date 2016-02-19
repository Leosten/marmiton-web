(function() {
  'use strict';

  angular
    .module('marmiton')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
