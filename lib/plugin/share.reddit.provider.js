;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareReddit', shareReddit);

  function shareReddit() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      subreddit: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareRedditService.defaults = defaults;
      return shareRedditService;
    };

    function shareRedditService($window, $location, config) {
      var options = angular.extend({}, defaults, config);
      var urlString = 'https://www.reddit.com/';

      if (options.subreddit) {
        urlString += 'r/' + options.subreddit + '/submit?url=';
      } else {
        urlString += 'submit?url=';
      }
      /*-
       * Reddit isn't responsive and at default width for our popups (500 x 500), everything is messed up.
       * So, overriding the width if it is less than 900 (played around to settle on this) and height if
       * it is less than 650px.
       */
      if (options.popupWidth < 900) {
        options.popupWidth = 900;
      }

      if (options.popupHeight < 650) {
        options.popupHeight = 650;
      }

      $window.open(
        urlString + encodeURIComponent(options.url || $location.absUrl()) + '&title=' + encodeURIComponent(options.text),
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);

    }

  }
})();
