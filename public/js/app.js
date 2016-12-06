
'use strict';
/* App Module */
var app = angular.module('cms_core', [
    'ngRoute',
    'ngResource',
    'ngCookies',
     '_jsLoginControllers',
]);
app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
                when('/', {
                    url: "dang-nhap",
                    controller: 'LoginCtrl',
                    templateUrl: '/views/login.html'
                }).
                when('/home', {
                    url: "trang-chu",
                    controller: 'HomeCtrl',
                    templateUrl: '/views/home/index.html'
                }).
                when('/user', {
                    url: "nguoi-dung",
                    controller: 'UserCtrl',
                    templateUrl: '/views/user/index.html'
                }).
                when('/404', {
                url: "/404.html",
                templateUrl : 'views/404.html',
                title: '404 - Không tìm thấy trang yêu cầu'
                }).
                otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);
app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});
app.filter('iif', function () {
    return function (input, trueValue, falseValue) {
        return input ? trueValue : falseValue;
    };
});
app.filter('sumOfCol', function () {
    return function (data, key) {
        //debugger;
        if (angular.isUndefined(data) && angular.isUndefined(key))
            return 0;
        var sum = 0;

        angular.forEach(data, function (v, k) {
            sum = sum + parseFloat(v[key]);
        });
        var dg = sum.toString();
        while (dg.length > 0 && dg.indexOf(kyHieuDot) > -1) {
            dg = dg.substring(0, dg.indexOf(kyHieuDot));
        }
        return formatMoney(dg);
    }
});
app.filter('unique', function () {
    return function (arr, targetField) {
        var values = [],
            i,
            unique,
            l = arr != undefined ? arr.length : 0,
            results = [],
            obj;
        for (i = 0; i < l; i++) {
            obj = arr[i];
            unique = true;
            for (v = 0; v < values.length; v++) {
                if (obj[targetField] == values[v]) {
                    unique = false;
                }
            }
            if (unique) {
                values.push(obj[targetField]);
                results.push(obj);
            }
        }
        return results;
    };
});

