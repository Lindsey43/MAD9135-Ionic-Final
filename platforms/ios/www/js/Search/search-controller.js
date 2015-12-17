angular.module('starter.controllers')
.controller('SearhCtrl', function($scope) {
    $scope.data = {
        search :""
    }
    $scope.search = function(terra){
        alert(terra);
    }
});

