var module = angular.module("moreDirectivesApp", []);
module.controller("moreDirectivesCtrlr", ctlr);

function ctlr() {
    this.myList = [{'name': 'Jaini', 'age': 25}, {'name': 'Foo', 'age': 15}, {'name': 'Bar', 'age': 35}];
}