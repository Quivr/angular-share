;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareFlipboard', shareFlipboard);

  function shareFlipboard() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareFlipboardService.defaults = defaults;
      return shareFlipboardService;
    };

    function shareFlipboardService($window, $location, config) {
      var options = angular.extend({}, defaults, config);
      var urlString = 'https://share.flipboard.com/bookmarklet/popout?v=2&';

      if (options.text) {
        urlString += 'title=' + encodeURIComponent(options.text) + '&';
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
