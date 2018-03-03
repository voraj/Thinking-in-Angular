var app = angular.module("TodoModule", []);

app.controller("TodoController", todoCtrlr);

function todoCtrlr() {

    this.todolist = ["Learn Angular", "Gym"];
    this.editMode = false;
    this.addTodo = function () {
        this.todolist.push(this.todo);
        this.todo = "";
    }

    this.deleteTodo = function (index) {
        this.todolist.splice(index, 1);
    }

    this.triggerEditMode = function () {
        this.editMode = !this.editMode;
    }
}