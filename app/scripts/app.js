'use strict';

angular.module('historyUiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/:eventId', {
        templateUrl: 'partials/:eventid',
        controller: 'EventidCtrl'
      })
      .when('/:eventId/images/:imageUrl', {
        templateUrl: 'partials/:eventid/images/:imageurl',
        controller: 'EventidImagesImageurlCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });