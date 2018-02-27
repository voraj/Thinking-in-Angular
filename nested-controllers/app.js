var app = angular.module("ngModelExamplesModule", []);
app.controller("ExampleCtrlr", ExampleCtrl);

function ExampleCtrl($scope) {
    $scope.textString = "null";
    $scope.booleanValue = false;

    $scope.textChange = function () {
        console.log("Text changed");
    }
}