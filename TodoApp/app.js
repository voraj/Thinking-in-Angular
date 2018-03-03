var app = angular.module("TodoModule", []);

app.controller("TodoController", todoCtrlr);

function todoCtrlr() {

    this.todolist = ["Learn Angular", "Gym"];

    this.addTodo = function () {
        this.todolist.push(this.todo);
        console.log(this.todo);
        this.todo = "";
    }


}