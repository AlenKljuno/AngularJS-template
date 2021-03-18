app.config(['$routeProvider', function($routeProvider){
$routeProvider
.when(
    '/home',{
        templateUrl:'components/home/home.html',
        controller:'homeController'
        

    }
).when(
    '/login',{
        templateUrl:'components/login/login.html',
        controller:'loginController'
    }
).otherwise({
    template:'NOT FOUND'
}

);
}]);