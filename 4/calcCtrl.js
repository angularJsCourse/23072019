module.controller("calcCtrl", CalcCtrl)


function CalcCtrl($scope, $rootScope) {


    // this.x = 0
    // this.y = 0
    // this.c = 0


    $scope.x = 0
    $scope.y = 0

    $scope.c = 0
    $rootScope.publicResult = 0
    $scope.res = '+'


}