angular.module('todoListApp')
.directive('todos', function() {
     return {
          templateUrl: 'templates/todos.html',
          controller: 'mainCtrl',
          replace: true     // remove the todos tags from final rendered page
     }
})
