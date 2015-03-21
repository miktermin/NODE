'use strict';

/**
 * @ngdoc function
 * @name myNodeJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNodeJsApp
 */
angular.module('myNodeJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
