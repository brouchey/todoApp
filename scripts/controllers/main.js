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

     $scope.saveTodos = function() {
          var filteredTodos = $scope.todos.filter(function(todo) {     // filter todos into a new array filteredTodos
             if(todo.edited) {     // if a todo has been edited
                  return todo;     // return it
             }
          });
          dataService.saveTodos(filteredTodos);   // save edited todos only
     };

     $scope.addTodo = function(todo) {
          var todo = {name: "This is a new todo."};
          // $scope.todos.push(todo);
          // push the new object, UI will automatically be refreshed when the data is updated
          $scope.todos.unshift(todo);
          // push adds values at the end of the array
          // unshift is the opposite, it adds values at the beginning of the array
          // so we use unshift to have new task displayed on the top
     };

})
