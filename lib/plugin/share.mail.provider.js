;(function() {
  'use strict';

  angular.module('angularShare')
    .provider('shareMail', shareMail);

  function shareMail() {

    var defaults = this.defaults = {

      url: '',
      text: '',
      subject: '',
      to: '',
      cc: '',
      bcc: '',
      trigger: 'click'
    };

    this.$get = function() {
      shareMailService.defaults = defaults;
      return shareMailService;
    };

    function shareMailService($window, $location, config) {
      var options = angular.extend({}, defaults, config);
      var urlString = 'mailto:' + encodeURIComponent(options.to) + '?';

      urlString += 'body=';
      if (options.text){
        urlString += encodeURIComponent(options.text) + '%0D%0A%0D%0A';
      }

      //default to the current page if a URL isn't specified
      urlString += encodeURIComponent(options.url || $location.absUrl());

      if (options.subject){
        urlString += '&subject=' + encodeURIComponent(options.subject);
      }

      if (options.cc){
        urlString += '&cc=' + encodeURIComponent(options.cc);
      }

      if (options.bcc){
        urlString += '&bcc=' + encodeURIComponent(options.bcc);
      }

      $window.location.href = urlString;
    }

  }
})();
