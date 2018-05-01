
var app = angular.module('ToDoApp', []);



app.controller('TaskController', ['$http', function ($http) {
    console.log('TaskController running');
    var self = this;

    self.tasks = [];

    self.resetNewTask = function () {
        self.newTask = {
            task_name: '',
            priority: 'low',
            due_date: new Date(),
        };
    }


    self.addTask = function () {
        console.log(`adding new task ${self.newTask}`);
        $http({
            method: 'POST',
            url: '/task',
            data: self.newTask,
        })
            .then(function (response) {
                console.log('successful POST');
                // reset inputs
                self.resetNewTask();

                // reload all of the tasks from the server
                self.getTasks();

            })
            .catch(function (error) {
                console.log('error on POST to /task', error);
            })
    }

    self.getTasks = function () {
        console.log(`adding new task ${self.newTask}`);
        $http({
            method: 'GET',
            url: '/task',
        })
            .then(function (response) {
                console.log('successful GET: ', response.data);
                self.tasks = response.data;

            })
            .catch(function (error) {
                console.log('error on GET from /task', error);
            })

    }

    self.toggleCompleteness = function (theTask) {
        // reverse boolean value of the property complete
        theTask.complete = !theTask.complete;
        // send to server for PUT
        self.updateTask(theTask);
    }

    self.updateTask = function (theTask) {
        console.log('the task to update: ', theTask);
        $http({
            method: 'PUT',
            url: '/task',
            data: theTask,
        })
            .then(function (response) {
                console.log('successful PUT');
                // reload all of the tasks from the server
                self.getTasks();
            })
            .catch(function (error) {
                console.log('error on PUT to /task', error);
            })

    }
    self.deleteTask = function (theTask) {
        console.log('the task to delete: ', theTask);
        // initiate confirmation dialog box
        // this method, confirm(), returns either true or false based on
        // the button selection within the confirmation dialog box
        if (confirm("Oh rlly, delete the task???")) {
            // request server to delete task
            $http({
                method: 'DELETE',
                url: '/task',
                params: theTask,
            })
                .then(function (response) {
                    console.log('successful DELETE');
                    // reload all of the tasks from the server
                    self.getTasks();
                })
                .catch(function (error) {
                    console.log('error on DELETE to /task', error);
                })
        }
        else {
            console.log('nope, not gonna delete it.');
        }
    }

    // start the application with default data
    self.init = function () {
        self.resetNewTask();
        self.getTasks();
    }

    self.init();

}]);


// Here is some out-of-date syntax.
// There are years of code solutions posted online that use this
// so it's important to understand how it works:

// app.controller('TaskController', ['$scope', function ($scope) {
//     console.log('TaskController running');

//     $scope.message = 'hi with $scope'
// }]);