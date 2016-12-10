'use strict';
angular.module('todoListApp')
.service('dataService', function($http) {

     this.getTodos = function(callback) {
          $http.get('mock/todos.json')
          .then(callback)
          // because async, so we need to get the file first and work on it
     };

     this.deleteTodo = function(todo) {
          console.log("The " + todo.name + " has been deleted !")
     };
     
     this.saveTodos = function(todos) {
          console.log(todos.length + " todos have been saved !")
     };
});