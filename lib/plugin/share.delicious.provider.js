;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareDelicious', shareDelicious);

  function shareDelicious() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      media: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareDeliciousService.defaults = defaults;
      return shareDeliciousService;
    };

    function shareDeliciousService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

      $window.open(
        'https://www.delicious.com/save?v=5&noui&jump=close&url=' + encodeURIComponent(options.url || $location.absUrl()) + '&title=' + encodeURIComponent(options.text),
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    }

  }
})();
