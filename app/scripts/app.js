/*jslint indent: 2, maxerr: 50, maxlen: 120, node: true, nomen: true, plusplus: true, vars: true */
/*global angular: false, history: false, window: false, Pace: false */

'use strict';



// #####################################################################################################################

function onModuleStart($rootScope, $state) {

  $rootScope.$state = $state;
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

(function () {
  angular
    .module('codvioApp', ['ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps'])
    .config(config)
    .run(onModuleStart);
}());
