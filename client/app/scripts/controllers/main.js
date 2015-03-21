'use strict';

/**
 * @ngdoc function
 * @name myNodeJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myNodeJsApp
 */
angular.module('myNodeJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
