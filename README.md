Angular Share
=============

Angular Share is an extensible AngularJS module for sharing urls and content on social networks such as facebook, google+, twitter, pinterest and so on.
The module contains a directive, a general service and configurable plugins that can be loaded as needed.

The provider-specific code in the plugins is based on code from [Angular Socialshare](https://github.com/720kb/angular-socialshare).


Angular Share is developed by [Quivr](https://quivr.be).

####Requirements


AngularJS v1.3+

####Browser support


![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
 ✔ | ✔ | IE9 + | ✔ | ✔ |


## Load

To use the module, include the main Angular Share javascript file in your web page, as well as the scripts for all the providers that will be used:

```html
<!DOCTYPE HTML>
<html>
<body ng-app="app">
  //.....
  <script src="src/js/angular-share.js"></script>
  <script src="src/js/share.facebook.provider.js"></script>
  <script src="src/js/share.twitter.provider.js"></script>
</body>
</html>
```

##Installation

####Bower

```bash
$ bower install quivr/angular-share --save
```
####Npm

```bash
$ npm install quivr/angular-share --save
```

_then [load](https://github.com/quivr/angular-share#load) it in your html_

####Add module dependency
Add the angularShare module dependency

```javascript
angular.module('app', [
  'angularShare'
]);
```

##Usage
Angular Share allows you to configure sharing options via `attribute` data.
You can call the directive wherever you want in your html page:

```html
<a href="#"
   share
   share-provider="twitter"
   share-text="Quivr Angular Share"
   share-hashtags="angularjs, angular-share"
   share-url="https://quivr.be">
    Share me
</a>
```

You can also call the share service (underlying the directive) directly from your javascript code:

```javascript
angular.module('app')
.controller('appCtrl', ['$shareFactory', function demoCtrl($shareFactory) {
  function doSomething() {
    $shareFactory.share('Facebook', {...});
  };
});
```

####Sharing Provider
You can set the social platform you want to share on using the `share-provider=""` attribute or as the first argument to the `share()` function of the service.

#####Providers:

- [Facebook](#facebook)
- [Twitter](#twitter)
- [Linkedin](#linkedin)
- [GooglePlus](#google)
- [Pinterest](#pinterest)
- [Tumblr](#tumblr)
- [Reddit](#reddit)
- [Stumbleupon](#stumbleupon)
- [Buffer](#buffer)
- [Digg](#digg)
- [Delicious](#delicious)
- [Vk](#vk)
- [Pocket](#pocket)
- [Wordpress](#wordpress)
- [Flipboard](#flipboard)
- [Xing](#xing)
- [HackerNews](#hacker-news)
- [Mail](#mail)

Please use the provider names as written above, the names are case-sensitive.

##Provider Documentation

####Facebook

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer, dialog | share-url=""          | page URL                  | false | Set the url to share
  dialog         | share-text=""         | String                    | false | Set the headline to share
  dialog         | share-description=""  | String                    | false | Set the content to share
  dialog         | share-media=""        | URL                       | false | Set the media source to share
  dialog         | share-type=""         | String('feed')            | false | Share via facebook feed dialog  - [info](https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.4)
  dialog         | share-via=""          | String                    | false | Set the APP ID value
  dialog         | share-to=""           | String	                 | false | Set the to value
  dialog         | share-from=""         | String	                 | false | Set the from to value
  dialog         | share-ref=""          | String('comma,separated') | false | Set the ref value
  dialog         | share-display=""      | String('popup')           | false | Set the display value
  dialog         | share-source=""       | URL                       | false | Set the source value
  dialog         | share-caption=""      | String                    | false | Set the caption to share
  dialog         | share-redirect-uri="" | URL                       | false | Set the redirect URI

####Twitter

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer      | share-url=""      |	URL                       | page URL | Set the url to share
  sharer      | share-text=""     | String	                  | false    | Set the content to share
  sharer	  | share-via=""      | String('@username')       | false    | Set the via to share
  sharer	  | share-hashtags="" |	String('hash,tag,hastag') | false    | Set the hashtags to share

####Linkedin

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url="" 	     | URL    | page URL | Set the url to share
  sharer	  | share-text=""        | String | false    | Set the title value that you wish to use
  sharer      | share-description="" | String | false    | Set the description value that you wish to use
  sharer      | share-source=""      | String | false    | Set the source of the content

####Reddit

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url=""       | URL                  | page URL | Set the url to share
  sharer	  | share-text=""      | String               | false    | Set the content to share
  sharer	  | share-subreddit="" | String('technology') | false    | Set the subreddit to share on

####Vk

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url=""   | URL    | page URL | Set the url to share
  sharer	  | share-text=""  | String | false    | Set the content to share
  sharer	  | share-media="" | URL    | false    | Set the media url to share

####Digg

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url=""   | URL    | page URL | Set the url to share
  sharer	  | share-text=""  | String	| false    | Set the content to share
  sharer	  | share-media="" | URL    | false    | Set the media url to share

####Delicious

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url=""   | URL    | page URL | Set the url to share
  sharer	  | share-text=""  | String	| false    | Set the content to share
  sharer	  | share-media="" | URL    | false    | Set the media url to share

####StumbleUpon

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url=""   | URL    | page URL | Set the url to share
  sharer	  | share-text=""  | String	| false    | Set the content to share
  sharer	  | share-media="" | URL    | false    | Set the media url to share

####Pinterest

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url=""   | URL    | page URL | Set the url to share
  sharer	  | share-text=""  | String	| false    | Set the content to share
  sharer	  | share-media="" | URL    | false    | Set the media url to share

####Google+

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url="" | URL | page URL |	Set the url to share

####Tumblr

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url=""   | URL    | page URL | Set the url to share
  sharer	  | share-text=""  | String	| false    | Set the content to share
  sharer	  | share-media="" | URL    | false    | Set the media url to share

####Buffer

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url=""  | URL    | page URL | Set the url to share
  sharer	  | share-text="" | String | false    | Set the content to share
  sharer	  | share-via=""  | URL    | false    | Set the buffer via

####Pocket

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url=""  |	URL    | page URL |	Set the url to share
  sharer	  | share-text="" | String | false    |	Set the content to share

####Flipboard

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url=""  | URL    | page URL | Set the url to share
  sharer	  | share-text="" | String | false    |	Set the content to share

####Hacker News

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url=""  | URL    | page URL |	Set the url to share
  sharer	  | share-text="" | String | false    |	Set the content to share

####Wordpress

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url=""   | URL    | page URL | Set the url to share
  sharer	  | share-text=""  | String | false    | Set the content to share
  sharer	  | share-media="" | URL    | false    | Set the media url to share

####Xing

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url="" 	| URL    | page URL | Set the url to share
  sharer	  | share-text=""   | String | false    | Set the content to share
  sharer	  | share-media=""  | URL    | false    | Set the media url to share
  sharer	  | share-follow="" | URL    | false    | Set the Xing page url which will be then suggested to you to follow

####Mail

Method | Option | Type | Default | Description
------------- | ------------- | ------------- | ------------- | -------------
  sharer	  | share-url="" 	| URL    | page URL | Set the url to share
  sharer	  | share-text=""   | String | false    | Set the body of the mail
  sharer	  | share-to=""  | String('comma,separated')    | false    | Set the recipients
  sharer	  | share-cc="" | String('comma,separated')    | false    | Set the cc recipients
  sharer	  | share-bcc="" | String('comma,separated')    | false    | Set the bcc recipients
  sharer	  | share-subject="" | String    | false    | Set the subject of the mail

##Options

####Sharing Popup Size
You can set a specific height or width for the sharing popup using the `share-popup-height=""` and `share-popup-width=""` attributes:

```html
<a href="#"
   share
   share-provider="Reddit"
   share-url="https://quivr.be"
   share-text="Sharing it!"
   share-popup-height="800"
   share-popup-width="800">
    Share with a bigger popup
</a>
```

####Sharing Event Trigger
You can choose to bind a different event trigger for showing the sharer popup using the `share-trigger=""` attribute (you can use any angular `element.bind()` event you want):

```html
<a href="#"
   share
   share-provider="Reddit"
   share-text="Sharing on mouseover"
   share-trigger="mouseover">
    Share me on mouseover
</a>
```

or a set of

```html
<a href="#"
   share
   share-provider="Reddit"
   share-text="Sharing on mouseover"
   share-trigger="focusout mouseleave">
    Share me on focusout or mouseleave
</a>
```

##Globals
####Provider setup
Sometimes you may need to set default values for a sharing provider, which can be done like this:

```javascript
angular.module('app')
.config(['shareFacebookProvider', function configApp(shareFacebookProvider) {
  angular.extend(shareFacebookProvider.defaults, {
    'url': 'https://quivr.be',
    'trigger': 'mouseover',
    'popupHeight': 1300,
    'popupWidth' : 1000
  });
});
```

##Contributing

Feel free to contribute by opening issues, forking, pull requests etc.

## License

The MIT License (MIT)

Copyright (c) 2016 Quivr

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
