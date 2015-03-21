'use strict';

/**
 * @ngdoc service
 * @name myNodeJsApp.AuthSvc
 * @description
 * # AuthSvc
 * Service in the myNodeJsApp.
 */
angular.module('myNodeJsApp')
  .service('AuthSvc', function () {
    var _doesPasswordMatch = function(user) {
      console.log(user.password === user.repeat_password);
      return _.isObject(user) ? user.password === user.repeat_password : false;
    };

    return {
      signIn: function() {
        console.log('Signing in');
      },

      signUp: function() {
        console.log('Signing up');
      },

      doesPasswordMatch: _doesPasswordMatch
    }
  });
