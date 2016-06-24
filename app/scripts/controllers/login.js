'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user
dashBoard.controller("loginCtrl",function($scope,authenticateService){        
                $scope.submit = function(){
            authenticateService.returnMessage($scope.username,$scope.password);
            } 
});