/*jslint indent: 2, maxerr: 50, maxlen: 120, node: true, nomen: true, plusplus: true, vars: true */
/*global angular: false, history: false, window: false, Pace: false */

'use strict';



// #####################################################################################################################

function onModuleStart($rootScope, $state, $location, anchorSmoothScroll) {

  $rootScope.$state = $state;

  $rootScope.gotoElement = function (eID) {

    $location.hash(eID);

    // call $anchorScroll()
    anchorSmoothScroll.scrollTo(eID);
  };
}



// #####################################################################################################################

function config($stateProvider, $urlRouterProvider, $locationProvider) {

  if (!window.useHashUrlsEvenIfHtml5Supported && history && history.pushState) {
    $locationProvider.html5Mode(true);
  }

  $urlRouterProvider.when('', '/tr/');
  $urlRouterProvider.when('/', '/tr/');
  $urlRouterProvider.when('/tr', '/tr/');
  $urlRouterProvider.when('/en', '/en/');
  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('not_found', {
      'url'        : '/404',
      'templateUrl': 'views/404.html',
      'data'       : {pageTitle: '404'}
    })
    .state('tr', {
      'url'        : '/tr',
      'templateUrl': 'views/tr/master.html'
    })
    .state('tr.home', {
      'url'        : '/',
      'templateUrl': 'views/tr/home.html',
      'data'       : {pageTitle: 'Web Teknolojileri, Bulut Bilişim, Şeylerin İnterneti (IoT), Linux, Ağ Teknolojileri'}
    })
    .state('tr.services', {
      'url'        : '/hizmetler',
      'templateUrl': 'views/tr/services.html',
      'data'       : {pageTitle: 'Hizmetler'}
    })
    .state('tr.services.os', {
      'url'        : '/acik_kaynak',
      'templateUrl': 'views/tr/services.html'
    })
    .state('tr.services.web', {
      'url'        : '/web_teknolojileri',
      'templateUrl': 'views/tr/services.html'
    })
    .state('tr.services.cloud', {
      'url'        : '/bulut_bilisim',
      'templateUrl': 'views/tr/services.html'
    })
    .state('tr.services.iot', {
      'url'        : '/seylerin_interneti',
      'templateUrl': 'views/tr/services.html'
    })
    .state('tr.services.linux', {
      'url'        : '/linux',
      'templateUrl': 'views/tr/services.html'
    })
    .state('tr.services.edu', {
      'url'        : '/egitim_danismanlik',
      'templateUrl': 'views/tr/services.html'
    })
    .state('tr.works', {
      'url'        : '/calismalar',
      'templateUrl': 'views/tr/works.html',
      'data'       : {pageTitle: 'Çalışmalar'}
    })
    .state('tr.works.bulutkare', {
      'url'        : '/bulutkare',
      'templateUrl': 'views/tr/works.html'
    })
    .state('tr.works.ilactakip', {
      'url'        : '/ilactakip',
      'templateUrl': 'views/tr/works.html'
    })
    .state('tr.works.eteshis', {
      'url'        : '/eteshis',
      'templateUrl': 'views/tr/works.html'
    })
    .state('tr.contact', {
      'url'        : '/iletisim',
      'templateUrl': 'views/tr/contact.html',
      'data'       : {pageTitle: 'İletişim'}
    })
    .state('en', {
      'url'        : '/en',
      'templateUrl': 'views/en/master.html'
    })
    .state('en.home', {
      'url'        : '/',
      'templateUrl': 'views/en/home.html',
      'data'       : {pageTitle: 'Web Technologies, Cloud Computing, Internet of Things, Linux, Networking'}
    })
    .state('en.services', {
      'url'        : '/services',
      'templateUrl': 'views/en/services.html',
      'data'       : {pageTitle: 'Services'}
    })
    .state('en.services.os', {
      'url'        : '/open_source',
      'templateUrl': 'views/en/services.html'
    })
    .state('en.services.web', {
      'url'        : '/web_technologies',
      'templateUrl': 'views/en/services.html'
    })
    .state('en.services.cloud', {
      'url'        : '/cloud_computing',
      'templateUrl': 'views/en/services.html'
    })
    .state('en.services.iot', {
      'url'        : '/internet_of_things',
      'templateUrl': 'views/en/services.html'
    })
    .state('en.services.linux', {
      'url'        : '/linux',
      'templateUrl': 'views/en/services.html'
    })
    .state('en.services.edu', {
      'url'        : '/education_consultancy',
      'templateUrl': 'views/en/services.html'
    })
    .state('en.works', {
      'url'        : '/works',
      'templateUrl': 'views/en/works.html',
      'data'       : {pageTitle: 'Works'}
    })
    .state('en.works.bulutkare', {
      'url'        : '/bulutkare',
      'templateUrl': 'views/en/works.html'
    })
    .state('en.works.ilactakip', {
      'url'        : '/ilactakip',
      'templateUrl': 'views/en/works.html'
    })
    .state('en.works.eteshis', {
      'url'        : '/eteshis',
      'templateUrl': 'views/en/works.html'
    })
    .state('en.contact', {
      'url'        : '/contact',
      'templateUrl': 'views/en/contact.html',
      'data'       : {pageTitle: 'Contact'}
    });
}



// #####################################################################################################################

function anchorSmoothScroll($document, $window) {

  var document = $document[0];
  var window   = $window;

  function getCurrentPagePosition(window, document) {
    // Firefox, Chrome, Opera, Safari
    if (window.pageYOffset) return window.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  }

  function getElementY(document, element) {
    var y    = element.offsetTop;
    var node = element;
    while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    }
    return y;
  }

  this.scrollDown = function (startY, stopY, speed, distance) {

    var timer = 0;

    var step  = Math.round(distance / 25);
    var leapY = startY + step;

    for (var i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
  };

  this.scrollUp = function (startY, stopY, speed, distance) {

    var timer = 0;

    var step  = Math.round(distance / 25);
    var leapY = startY - step;

    for (var i = startY; i > stopY; i -= step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY -= step;
      if (leapY < stopY) leapY = stopY;
      timer++;
    }
  };

  this.scrollToTop = function (stopY) {
    scrollTo(0, stopY);
  };

  this.scrollTo = function (elementId, speed) {
    // This scrolling function
    // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

    var element = document.getElementById(elementId);

    if (element) {
      var startY = getCurrentPagePosition(window, document);
      var stopY  = getElementY(document, element);

      var distance = stopY > startY ? stopY - startY : startY - stopY;

      if (distance < 100) {
        this.scrollToTop(stopY);

      } else {

        var defaultSpeed = Math.round(distance / 100);
        speed            = speed || (defaultSpeed > 20 ? 20 : defaultSpeed);

        if (stopY > startY) {
          this.scrollDown(startY, stopY, speed, distance);
        } else {
          this.scrollUp(startY, stopY, speed, distance);
        }
      }
    }
  };
}


// #####################################################################################################################

(function () {
  angular
    .module('codvioApp', ['ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps'])
    .config(config)
    .service('anchorSmoothScroll', anchorSmoothScroll)
    .run(onModuleStart);
}());
