;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareTumblr', shareTumblr);

  function shareTumblr() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      media: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareTumblrService.defaults = defaults;
      return shareTumblrService;
    };

    function shareTumblrService($window, $location, config) {
      var options = angular.extend({}, defaults, config);
      var urlString;

      if (options.media) {
        urlString = 'https://www.tumblr.com/share/photo?source=' + encodeURIComponent(options.media);

        if (options.text) {
          urlString += '&caption=' + encodeURIComponent(options.text);
        }

        $window.open(
          urlString,
          'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight
          + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
      } else {
        $window.open(
          'https://www.tumblr.com/share/link?url=' + encodeURIComponent(options.url) + '&description=' + encodeURIComponent(options.text),
          'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
          ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
      }
    }

  }
})();
