'use strict';

/**
 * @ngdoc overview
 * @name myNodeJsApp
 * @description
 * # myNodeJsApp
 *
 * Main module of the application.
 */
angular
  .module('myNodeJsApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
