angular.module('example.actor', [])
  .controller('ActorCtrl', ['$scope', function ($scope) {

  }])
  .directive('appActor', function () {
    return {
      scope: {
        actorName: '<'
      },
      template: require('./actor.html'),
      controller: 'ActorCtrl'
    };
  });
