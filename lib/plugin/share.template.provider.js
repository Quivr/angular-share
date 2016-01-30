;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareTemplate', shareTemplate);

  function shareTemplate() {

    var defaults = this.defaults = {

    };

    this.$get = function() {
      shareTemplateService.defaults = defaults;
      return shareTemplateService;
    };

    function shareTemplateService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

    }

  }
})();
