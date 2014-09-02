'use strict';

angular.module('historyUiApp')
  .controller('EventidImagesImageurlCtrl', function ($scope, $http,$location,$routeParams) {
    $http.get('json/events.json').success(function(data) {
      $scope.img = data;
    });

        $scope.img2Show = $routeParams.imageUrl;
        $scope.eventId2Show = $routeParams.eventId;

        $scope.goback = function ( path  ) {
            $location.path( "/"+path);
        };

  });


