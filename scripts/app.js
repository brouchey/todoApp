angular.module("todoListApp", [])		// creates new module, second parameter defines dependencies
.controller('mainCtrl', function($scope, dataService) {
		// $scope = this area of operation
		// dataService = dependency in the controller, now we can access the services methods as any other object

		$scope.helloConsole = dataService.helloConsole;

		dataService.getTodos(function(response) {		// import JSON file todos from dataService
         console.log(response.data);
         $scope.todos = response.data;
    });

    $scope.deleteTodo = function(todo, $index) {
          dataService.deleteTodo(todo);     	// fire the deleteTodo by the dataService
          $scope.todos.splice($index, 1);     // .splice changes the content of todos array, adding new elements while removing old elements
     }
     $scope.saveTodo = function(todo) {
          dataService.saveTodo(todo);
     }


})
.service('dataService', function($http) {

     this.helloConsole = function() {
          console.log('This is the Hello Console service !');
     };

     this.getTodos = function(callback) {
          $http.get('mock/todos.json')
          .then(callback)		// because async, so we need to get the file first and work on it
     };

     this.deleteTodo = function(todo) {
          console.log("The " + todo.name + " has been deleted !")     // testing
     };  
     this.saveTodo = function(todo) {
          console.log("The " + todo.name + " has been saved !")     // testing
     };

});
