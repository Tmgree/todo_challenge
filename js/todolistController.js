todolist.controller('TodoController', function($scope) {

  $scope.lists = [];

  $scope.todoAdd = function(){
    $scope.lists.push({text:$scope.todoInput, done:false})
    $scope.todoInput = "";
  };

  $scope.todoremove = function($index){
    $scope.lists.splice($index, 1);
  };

  $scope.todoLength = function(){
    $scope.lists.length;
  };




});
