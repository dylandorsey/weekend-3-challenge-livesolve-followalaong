
var app = angular.module('ToDoApp', []);



app.controller('TaskController', ['$http', function ($http) {
    console.log('TaskController running');
    var self = this;
    self.message = 'hi from the task controller :D';






}]);


// Here is some out-of-date syntax.
// There are years of code solutions posted online that use this
// so it's important to understand how it works:

// app.controller('TaskController', ['$scope', function ($scope) {
//     console.log('TaskController running');

//     $scope.message = 'hi with $scope'
// }]);