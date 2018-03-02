var app = angular.module("ModulesApp", ["HelloModuleApp", "ngTagsInput"]);

app.controller('MainCtrl', mainCtrl);

function mainCtrl() {
    this.tags = [
        {text: 'Test1'},
        {text: 'Test2'},
        {text: 'Test3'}
    ];
}