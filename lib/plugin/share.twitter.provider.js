;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareTwitter', shareTwitter);

  function shareTwitter() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      via: '',
      hashtags: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareTwitterService.defaults = defaults;
      return shareTwitterService;
    };

    function shareTwitterService($window, $location, config) {
      var options = angular.extend({}, defaults, config);
      var urlString = 'https://www.twitter.com/intent/tweet?';

      if (options.text) {
        urlString += 'text=' + encodeURIComponent(options.text);
      }

      if (options.via) {
        urlString += '&via=' + encodeURI(options.via);
      }

      if (options.hashtags) {
        urlString += '&hashtags=' + encodeURI(options.hashtags);
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
