angular.module("todoListApp", [])		// creates new module, second parameter defines dependencies
.controller('mainCtrl', function($scope) {     // $scope = area of operation
     $scope.helloWorld = function() {
          console.log("Hello there! This is the helloWorld controller function.");
     };
});   
