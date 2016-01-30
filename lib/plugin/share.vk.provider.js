;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareVk', shareVk);

  function shareVk() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      media: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareVkService.defaults = defaults;
      return shareVkService;
    };

    function shareVkService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

      $window.open(
        'https://www.vk.com/share.php?url=' + encodeURIComponent(options.url || $location.absUrl()),
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    }

  }
})();
