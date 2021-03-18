loginModule.controller('loginController', function($scope,userService){
    $scope.user = 'Mika';
    $scope.password = 123;
    console.log(userService);
$scope.isLogged = userService.checkLogin($scope.user,$scope.password)
})