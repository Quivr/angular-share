;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareXing', shareXing);

  function shareXing() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      media: '',
      follow: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareXingService.defaults = defaults;
      return shareXingService;
    };

    function shareXingService($window, $location, config) {
      var options = angular.extend({}, defaults, config);
      var followUrl = '';

      if (options.follow) {
        followUrl = '&follow_url=' + encodeURIComponent(options.follow);
      }
      $window.open(
        'https://www.xing.com/spi/shares/new?url=' + encodeURIComponent(options.url || $location.absUrl()) + followUrl,
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    }

  }
})();
