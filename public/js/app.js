
'use strict';
/* App Module */
var app = angular.module('cms_core', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    '_jsUserRoleController',
    '_jsUserController',
    '_jsRoleController',
    '_jsProductGroupController',
    '_jsProductController',
    '_jsPositionController',
    '_jsNewsController',
    '_jsNewsCategoryController',
    '_jsMenuRoleController',
    '_jsMenuController',
    '_jsLoginControllers',
    '_jsHomeController',
    '_jsFunctionRoleController',
    '_jsFunctionController',
    '_jsDeparmentPositionController',
    '_jsDeparmentController',
    '_jsActionLogController',
]);
app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
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
            when('/actionlog', {
                url: "log",
                controller: 'ActionLogCtrl',
                templateUrl: '/views/actionLog/index.html'
            }).
            when('/deparment', {
                url: "phong-ban",
                controller: 'DeparmentCtrl',
                templateUrl: '/views/deparment/index.html'
            }).
            when('/menu', {
                url: "menu",
                controller: 'MenuCtrl',
                templateUrl: '/views/menu/index.html'
            }).
            when('/news', {
                url: "tin-tuc",
                controller: 'NewsCtrl',
                templateUrl: '/views/news/index.html'
            }).
            when('/newscategory', {
                url: "tin-tuc",
                controller: 'NewsCategoryCtrl',
                templateUrl: '/views/newsCategory/index.html'
            }).
            when('/position', {
                url: "chuc-vu",
                controller: 'PositionCtrl',
                templateUrl: '/views/position/index.html'
            }).
            when('/product', {
                url: "san-pham",
                controller: 'ProductCtrl',
                templateUrl: '/views/product/index.html'
            }).
            when('/productgroup', {
                url: "nhom-san-pham",
                controller: 'ProductGroupCtrl',
                templateUrl: '/views/productGroup/index.html'
            }).
            when('/role', {
                url: "nhom-quyen",
                controller: 'RoleCtrl',
                templateUrl: '/views/role/index.html'
            }).
            when('/404', {
                url: "/404.html",
                templateUrl: 'views/404.html',
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

