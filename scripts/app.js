angular.module("todoListApp", [])		// creates new module, second parameter defines dependencies
.controller('mainCtrl', function($scope, dataService) {
		// $scope = this area of operation
		// dataService = dependency in the controller, now we can access the services methods as any other object

		$scope.helloConsole = dataService.helloConsole;

     $scope.learningNgChange = function() {		// just to see how it works
          console.log("An input changed !");
     };

     $scope.todos = [     // array of objects
          { "name": "clean the house" },
          { "name": "water the dog" },
          { "name": "feed the lawn" },
          { "name": "pay bills" },
          { "name": "run" },
          { "name": "swim" },
     ]
})
.service('dataService', function() {
     this.helloConsole = function() {
          console.log('This is the Hello Console service !');     // testing
     }
});   
