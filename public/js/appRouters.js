angular.module('appRoutes', []).config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        /*Thiết lập các state*/
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "views/home.html",
                controller: 'baseController'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix('!');
    }]);