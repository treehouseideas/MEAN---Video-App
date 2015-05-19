'use strict';

/**
 * @ngdoc function
 * @name meanappApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the meanappApp
 */
angular.module('meanappApp')
  .controller('MoviesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
