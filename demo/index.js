;(function() {
  'use strict';

  angular.module('shareDemo', ['angularShare'])
    .config(function(shareFacebookProvider) {
      shareFacebookProvider.defaults.caption = 'testcaption';
    })
    .controller('demoCtrl', function demoCtrl($scope, $shareFactory) {
      $scope.click = function() {
        $shareFactory.share('Facebook');
      };
    });
})();
