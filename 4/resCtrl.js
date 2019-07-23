module.controller("resCtrl", ResCtrl)

function ResCtrl($scope, $rootScope) {

    $scope.calc = function () {
  //      console.log($scope.c)
        switch ($scope.res) {
            case '+':
                $scope.$parent.c = parseInt($scope.$parent.x) + parseInt($scope.$parent.y)
                // code block
                break;
            case '-':
                $scope.$parent.c = parseInt($scope.$parent.x) - parseInt($scope.$parent.y)
                // code block
                break;

            case '*':
                $scope.$parent.c = parseInt($scope.$parent.x) * parseInt($scope.$parent.y)
                // code block
                break;
            case '/':
                $scope.$parent.c = parseInt($scope.$parent.x) / parseInt($scope.$parent.y)
                // code block
                break;

                default:
            // code block
        }

        $rootScope.publicResult =   $scope.$parent.c

    }
}