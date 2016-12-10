angular.module("todoListApp")     // no second parameter, because module is already created in app.js so we want Angular to check in existing modules
.directive('helloWorld', function( ) {     // to attach a new directive to the module
     return {     // object
          template: "This is the Hello World directive",
          restrict: "E"     // (optional) restrict how the directive is used
          // element "E", attribute "A", class "C", comment "M"
     };
});
