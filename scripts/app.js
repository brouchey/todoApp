angular.module("todoListApp", [])		// creates new module, second parameter defines dependencies
.controller('mainCtrl', function($scope, dataService) {
		// $scope = this area of operation
		// dataService = dependency in the controller, now we can access the services methods as any other object

		$scope.learningNgChange = function() {		// just to see how it works
          console.log("An input changed !");
     };

		$scope.helloConsole = dataService.helloConsole;

		dataService.getTodos(function(response) {
         console.log(response.data);
         $scope.todos = response.data;
    });

})
.service('dataService', function($http) {

     this.helloConsole = function() {
          console.log('This is the Hello Console service !');     // testing
     };

     this.getTodos = function(callback) {
          $http.get('../mock/todos.json')
          .then(callback)		// because async, so we need to get the file first and work on it
     };

});
