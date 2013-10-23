'use strict';

eventsApp.controller('EventController',
    function ($scope, eventData) {
        $scope.sortOrder = 'name';

        $scope.event = eventData.getEvent();

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);
