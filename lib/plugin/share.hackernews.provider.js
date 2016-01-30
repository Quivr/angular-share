;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareHackerNews', shareHackerNews);

  function shareHackerNews() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareHackerNewsService.defaults = defaults;
      return shareHackerNewsService;
    };

    function shareHackerNewsService($window, $location, config) {
      var options = angular.extend({}, defaults, config);
      var urlString = 'https://news.ycombinator.com/submitlink?';

      if (options.text) {
        urlString += 't=' + encodeURIComponent(options.text) + '&';
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
