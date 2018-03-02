var app = angular.module("HelloModuleApp", []);
app.controller("HelloController", helloCtrl);

function helloCtrl() {
    this.helloMessage = "I am from External module";
}