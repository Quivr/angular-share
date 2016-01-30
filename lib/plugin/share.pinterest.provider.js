;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('sharePinterest', sharePinterest);

  function sharePinterest() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      media: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      sharePinterestService.defaults = defaults;
      return sharePinterestService;
    };

    function sharePinterestService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

      $window.open(
        'https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(options.url || $location.absUrl()) + '&media=' + encodeURI(options.media) + '&description=' + encodeURIComponent(options.text),
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    }

  }
})();
