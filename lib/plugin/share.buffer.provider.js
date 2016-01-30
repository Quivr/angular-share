;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareBuffer', shareBuffer);

  function shareBuffer() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      via: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareBufferService.defaults = defaults;
      return shareBufferService;
    };

    function shareBufferService($window, $location, config) {
      var options = angular.extend({}, defaults, config);
      var urlString = 'https://bufferapp.com/add?';

      if (options.text) {
        urlString += 'text=' + encodeURIComponent(options.text);
      }

      if (options.via) {
        urlString += '&via=' + encodeURI(options.via);
      }

      //default to the current page if a URL isn't specified
      urlString += '&url=' + encodeURIComponent(options.url || $location.absUrl());

      $window.open(
        urlString,
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    }

  }
})();
