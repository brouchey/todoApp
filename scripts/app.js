angular.module("todoListApp", [])		// creates new module, second parameter defines dependencies
.controller('mainCtrl', function($scope) {		// $scope = area of operation

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
});   
