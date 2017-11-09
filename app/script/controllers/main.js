var acumuladorApp = angular.module('acumuladorApp',[]);
acumuladorApp.controller("acumuladorCtrl",["$scope",function($scope){
    $scope.total = 0;
    $scope.cuanto = 0;

    $scope.sumar = function(){
        $scope.total+=parseInt($scope.cuanto);
    }

    $scope.resta = function(){
        $scope.total-=parseInt($scope.cuanto);
    }
}]);