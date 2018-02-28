var module = angular.module("calculatorModule", []);
module.controller("calculatorCtrlr", calcCtrl);

function calcCtrl() {
    this.result = 0;
    this.buttonClicked = function (operator) {
        this.selectedOperation = operator;
    }

    this.calculateResult = function () {
        var number1 = parseFloat(this.input1);
        var number2 = parseFloat(this.input2);
        if (this.selectedOperation === '+') {
            this.result = number1 + number2;
        }
        else if (this.selectedOperation === '-') {
            this.result = number1 - number2;
        }
        else if (this.selectedOperation === '*') {
            this.result = number1 * number2;
        }
        else if (this.selectedOperation === '/') {
            this.result = number1 / number2;
        }
    }
}