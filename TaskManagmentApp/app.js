var app = angular.module('taskManagmentApp', []);

app.controller('TaskController', function($scope, $http) {
    $scope.tasks = [];
    $scope.task = {};

    $scope.getTasks = function() {
        $http.get('http://localhost:8082/tasks/all')
            .then(function(response) {
                $scope.tasks = response.data;
            }, function(error) {
                console.error('Error fetching tasks:', error);
            });
    };

    $scope.addTask = function() {
        $http.post('http://localhost:8082/tasks', $scope.task)
            .then(function(response) {
                $scope.tasks.push(response.data);
                $scope.task = {}; 
            }, function(error) {
                console.error('Error adding task:', error);
            });
    };

    $scope.deleteTask = function(id) {
        $http.delete('http://localhost:8082/tasks/' + id)
            .then(function() {
                $scope.getTasks(); 
            }, function(error) {
                console.error('Error deleting task:', error);
            });
    };

    $scope.getTasks();
});