var module = angular.module('nestedControllers', []);
module.controller("Ctrl1", Ctrl1);
module.controller("Ctrl2", Ctrl2);

function Ctrl1() {
    this.testScope = "From Ctrl 1"
}

function Ctrl2() {
    this.testScope = "From Ctrl 2"
}