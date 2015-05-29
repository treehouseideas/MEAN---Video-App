'use strict';

/**
 * @ngdoc overview
 * @name meanappApp
 * @description
 * # meanappApp
 *
 * Main module of the application.
 */
angular
  .module('meanappApp', [
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
