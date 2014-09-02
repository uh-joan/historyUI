'use strict';

angular.module('historyUiApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    $http.get('/json/events.json').success(function(data) {
      $scope.episodes = data;
    });

        $scope.orderEpisodes = 'endTime';

        $scope.go = function ( path ) {
            $location.path( "/"+path );
        };

        $scope.clearScenarioQuery = function() {
            $scope.scenarioquery="";
        }

  });
