;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareLinkedin', shareLinkedin);

  function shareLinkedin() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      description: '',
      source: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareLinkedinService.defaults = defaults;
      return shareLinkedinService;
    };

    function shareLinkedinService($window, $location, config) {
      /*
       * Refer: https://developer.linkedin.com/docs/share-on-linkedin
       * Tab: Customized URL
       */
      var options = angular.extend({}, defaults, config);
      var  urlString = 'https://www.linkedin.com/shareArticle?mini=true';

      urlString += '&url=' + encodeURIComponent(options.url || $location.absUrl());

      if (options.text) {
        urlString += '&title=' + encodeURIComponent(options.text);
      }

      if (options.description) {
        urlString += '&summary=' + encodeURIComponent(options.description);
      }

      if (options.source) {
        urlString += '&source=' + encodeURIComponent(options.source);
      }

      $window.open(
        urlString,
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    }

  }
})();
