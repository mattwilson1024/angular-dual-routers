angular.module('example.actors-page', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/actors', {
      template: require('./actors-page.html'),
      controller: 'ActorsPageCtrl',
      reloadOnSearch: false
    });
  }])
  .controller('ActorsPageCtrl', ['$scope', function ($scope) {

  }]);
