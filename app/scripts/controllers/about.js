'use strict';

/**
 * @ngdoc function
 * @name meanappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meanappApp
 */
angular.module('meanappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
