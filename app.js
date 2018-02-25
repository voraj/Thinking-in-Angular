var module = angular.module("myApp", []);
module.controller("MainCtrl", Main);

function Main($scope) {
    var currentDate = new Date();
    $scope.timeOfDay = currentDate.toTimeString();
    $scope.updateTime = function () {
        $scope.userName = "";
        var currentDate = new Date();
        $scope.timeOfDay = currentDate.toTimeString();
    }
}