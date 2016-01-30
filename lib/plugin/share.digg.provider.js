;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareDigg', shareDigg);

  function shareDigg() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      media: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareDiggService.defaults = defaults;
      return shareDiggService;
    };

    function shareDiggService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

      $window.open(
        'https://www.digg.com/submit?url=' + encodeURIComponent(options.url || $location.absUrl()) + '&title=' + encodeURIComponent(options.text),
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    }

  }
})();
