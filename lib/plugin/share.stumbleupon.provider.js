;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareStumbleupon', shareStumbleupon);

  function shareStumbleupon() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      media: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareStumbleuponService.defaults = defaults;
      return shareStumbleuponService;
    };

    function shareStumbleuponService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

      $window.open(
        'https://www.stumbleupon.com/submit?url=' + encodeURIComponent(options.url || $location.absUrl()) + '&title=' + encodeURIComponent(options.text),
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    }

  }
})();
