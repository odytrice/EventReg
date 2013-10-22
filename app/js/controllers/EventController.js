'use strict';

eventsApp.controller('EventController',
    function ($scope, eventData) {
        $scope.mystyle = {color: "red"};
        $scope.sortOrder = 'name';
        $scope.event = eventData.event;

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);
