var module = angular.module("moreDirectivesApp", []);
module.controller("moreDirectivesCtrlr", ctlr);

function ctlr() {
    this.myList = [1, 2, 3, 4, 5, 6];
}