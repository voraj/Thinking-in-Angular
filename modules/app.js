var module = angular.module("ModulesApp", []);
module.controller("HelloController", hellCtrl);

function hellCtrl() {
    this.helloMessage = "I am from main module";
}