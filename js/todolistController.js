todolist.controller('TodoController', function($scope) {

  $scope.lists = [];

  $scope.todoAdd = function(){
    $scope.lists.push({text:$scope.todoInput, done:false})
    $scope.todoInput = "";
  };

  $scope.todoLength = function(){
    $scope.lists.length;
  };




});
