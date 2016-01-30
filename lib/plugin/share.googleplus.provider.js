;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareGooglePlus', shareGooglePlus);

  function shareGooglePlus() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      media: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareGooglePlusService.defaults = defaults;
      return shareGooglePlusService;
    };

    function shareGooglePlusService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

      $window.open(
        'https://plus.google.com/share?url=' + encodeURIComponent(options.url || $location.absUrl()),
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    }

  }
})();
