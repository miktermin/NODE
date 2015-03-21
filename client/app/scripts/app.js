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
      .otherwise({
        redirectTo: '/'
      });
  });

// CONTROLLERS
angular.module('myNodeJsAppControllers', [
  'myNodeJsAppServices',
  'myNodeJsAppDirectives'
]);

// SERVICES
angular.module('myNodeJsAppServices', ['lodash']);

// DIRECTIVES
angular.module('myNodeJsAppDirectives', [
  'myNodeJsAppControllers'
]);

