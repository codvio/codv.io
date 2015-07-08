/*jslint indent: 2, maxerr: 50, maxlen: 120, node: true, nomen: true, plusplus: true, vars: true */
/*global angular: false */

'use strict';



// #####################################################################################################################

/**
 * @ngdoc directive
 * @name codvioApp.directive:pageTitle
 * @description
 * # codvioApp - Directive for set Page title - mata title
 */
angular.module('codvioApp')
  .directive('pageTitle', function ($rootScope, $timeout) {

    return {
      'link': function (scope, element) {

        var listener = function (event, toState) {

          var title = 'codvio';

          // Create your own title pattern
          if (toState.data && toState.data.pageTitle) {
            title = toState.data.pageTitle + ' | codvio';
          }

          $timeout(function () {
            element.text(title);
          });
        };

        $rootScope.$on('$stateChangeStart', listener);
      }
    };
  });
