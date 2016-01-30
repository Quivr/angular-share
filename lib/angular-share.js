;(function() {
  'use strict';

  angular.module('angularShare', [])
    .factory('$shareFactory', ['$window', '$location', '$injector', '$log', shareFact])
    .directive('share', ['$shareFactory', shareDir]);

  function shareFact($window, $location, $injector, $log) {

    return {
      share: share,
      defaults: defaults
    };

    function share(provider, config) {
      getProvider(provider)($window, $location, config);
    }

    function defaults(provider) {
      return getProvider(provider).defaults;
    }

    function getProvider(provider) {
      var providerName = 'share' + provider;

      if (!$injector.has(providerName)) {
        $log.warn('Invalid Provider Name : ' + provider);
      }

      return $injector.get(providerName);
    }

  }

  function shareDir($shareFactory) {

    return {
      restrict: 'A',
      link: linker
    };

    function linker(scope, element, attrs) {
      var propertyRegex = /(?:[Ss]hare)(.*)/;
      var config = {};
      var trigger;

      trigger = attrs.shareTrigger || $shareFactory.defaults(attrs.shareProvider).trigger;

      element.bind(trigger, onEventTriggered);

      function onEventTriggered() {
        angular.forEach(Object.keys(attrs), function(key) {
          var property = propertyRegex.exec(key);
          if (property && property[1]) {
            property = property[1];
            property = property.charAt(0).toLowerCase() + property.slice(1);
            if (angular.isDefined(attrs[key])) {
              config[property] = attrs[key];
            }
          }
        });
        $shareFactory.share(config.provider, config);
      }

    }

  }

})();
