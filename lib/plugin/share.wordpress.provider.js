;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareWordpress', shareWordpress);

  function shareWordpress() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      media: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareWordpressService.defaults = defaults;
      return shareWordpressService;
    };

    function shareWordpressService($window, $location, config) {
      var options = angular.extend({}, defaults, config);
      var urlString = 'http://wordpress.com/press-this.php?';

      if (options.text) {
        urlString += 't=' + encodeURIComponent(options.text) + '&';
      }
      if (options.media) {
        urlString += 'i=' + encodeURIComponent(options.media) + '&';
      }

      //default to the current page if a URL isn't specified
      urlString += 'u=' + encodeURIComponent(options.url || $location.absUrl());

      $window.open(
        urlString,
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    }

  }
})();
