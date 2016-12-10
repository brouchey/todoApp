'use strict';
angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {
          // $scope = this area of operation
          // dataService = dependency in the controller, now we can access the services methods as any other object

     $scope.helloConsole = dataService.helloConsole;

     dataService.getTodos(function(response) {
     // import JSON file todos from dataService
         console.log(response.data);
         $scope.todos = response.data;
    });

    $scope.deleteTodo = function(todo, $index) {
          dataService.deleteTodo(todo);
          // fire the deleteTodo by the dataService
          $scope.todos.splice($index, 1);
          // .splice changes the content of todos array, adding new elements while removing old elements
     };
     $scope.saveTodo = function(todo) {
          dataService.saveTodo(todo);
     };
     $scope.addTodo = function(todo) {
          var todo = {name: "This is a new task."};
          $scope.todos.push(todo);
          // push the new object, UI will automatically be refreshed when the data is updated
     };

})