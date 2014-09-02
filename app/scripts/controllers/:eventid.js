'use strict';

angular.module('historyUiApp')
  .controller('EventidCtrl', function ($scope, $http, $routeParams, $location) {
    $http.get('json/events.json').success(function(data) {
        $scope.episodes = data;
        $scope.tagsValue = '0';
        $scope.ruleName = [];
        $scope.locationName = [];
    });

        $scope.eventId2Show = $routeParams.eventId;

        $scope.tagsItems = [{ label: "memorable", value: "important" },{ label:"interesting", value: "interesting" },{ label:"unclear", value: "question" },{ label:"none", value: "0" }];
        $scope.orderProp = 'time.narrative';

        $scope.go2 = function ( path  ) {
            $location.path( "/" +$scope.eventId2Show+"/"+path);
        };

        $scope.goback = function () {
            $location.path( "/");
        };

        $scope.setRadioValue=function(radioVal){
            $scope.tagsValue=radioVal;
            //$scope.ruleName.push(even);
        }

        $scope.setTags=function(tags,event){//this function should set the tags on the database
            $scope.dao= new dataHelper();
            $scope.dao.setTags(event.id, tags);
            event.tags[0]=tags;
            //$scope.ruleName.push(event.name);
        }

        $scope.loadLocationName = function (e) {
            //$scope.ruleName.push(e);
            //add if it's not repeated
            if ($scope.locationName.indexOf(e)==-1) $scope.locationName.push(e);
        }

        $scope.loadRuleName = function (e) {
            if ($scope.ruleName.indexOf(e)==-1) $scope.ruleName.push(e);
        }

        $scope.clearEventQuery = function() {
            $scope.eventquery="";
        }

        $scope.clearLocationQuery = function() {
            $scope.locationquery="";
        }

  });
