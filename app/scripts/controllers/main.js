'use strict';

/**
 * @ngdoc function
 * @name meanappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanappApp
 */
angular.module('meanappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
