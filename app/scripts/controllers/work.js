'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them
// var app= angular.module('dashApp',[]);
dashBoard.controller('work', function($scope, $http) {
    $http({
        method: "GET",
        url: "/api/work"
    }).then(function mySuccess(response) {
        $scope.works = response.data.works;
    }, function myError(response) {
        console.log("ERROR");
    });
});

