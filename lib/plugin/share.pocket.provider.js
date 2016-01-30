;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('sharePocket', sharePocket);

  function sharePocket() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      sharePocketService.defaults = defaults;
      return sharePocketService;
    };

    function sharePocketService($window, $location, config) {
      var options = angular.extend({}, defaults, config);
      var urlString = 'https://getpocket.com/save?';

      if (options.text) {
        urlString += 'text=' + encodeURIComponent(options.text) + '&';
      }

      //default to the current page if a URL isn't specified
      urlString += 'url=' + encodeURIComponent(options.url || $location.absUrl());

      $window.open(
        urlString,
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    }

  }
})();
