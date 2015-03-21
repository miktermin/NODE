'use strict';

/**
 * @ngdoc function
 * @name myNodeJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myNodeJsApp
 */
angular.module('myNodeJsApp')
  .controller('MainCtrl', ['$scope', 'AuthSvc', function ($scope, AuthSvc) {
    $scope.user = angular.extend({
      username: '',
      password: '',
      repeat_password: ''
    });

    $scope.signIn = AuthSvc.signIn;
    $scope.signUp = AuthSvc.signUp;
    $scope.doesPasswordMatch = AuthSvc.doesPasswordMatch;


  }]);
