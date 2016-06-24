'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged 
dashBoard.service('authenticateService', function($rootScope,$http,$location) {
        $rootScope.loginIn=false;
        this.returnMessage= function(username,password){
            $http({
            url: '/api/login',
            method: 'POST',
            data: {"userName":username,"password":password}
        }
        )
        .success(function(){ 
        $rootScope.loginIn=true;
       $location.path('/root/work');})
        .error(function(){alert("wrong password")});
        }
    });