/*jslint indent: 2, maxerr: 50, maxlen: 120, node: true, nomen: true, plusplus: true, vars: true */
/*global angular: false */

'use strict';


// #####################################################################################################################

function contactController($scope) {

  // ---------------------------------------------------------------------------

  $scope.map = {
    'windowControl': {},
    'mapCenter'    : {
      'latitude' : 40.99066207504869,
      'longitude': 29.027822439070178
    },
    'center'       : {
      'latitude' : 40.99066207504869,
      'longitude': 29.027822439070178
    },
    'zoom'         : 15,
    'options'      : {
      'pixelOffset': {
        'width' : 0,
        'height': -40
      }
    }
  };

  $scope.showInfoWindow = function () {

    $scope.map.windowControl.showWindow();
  };
}


// #####################################################################################################################

/**
 * @ngdoc function
 * @name codvioApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the codvioApp
 */
angular
  .module('codvioApp')
  .controller('ContactCtrl', ['$scope', contactController]);