'use strict';
/* Login Controllers */
var jsLoginControllers = angular.module('_jsLoginControllers', [])

jsLoginControllers.controller('LoginCtrl', ['$scope', '$location', '$http',
    function ($scope, $location, $http) {
        //Đăng nhập hệ thống
        $scope.Login = function () {
            var postData = {
                "username": $scope.username,
                "password": $scope.password
            };
            $http.post({}, postData,
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    if (response.success === true) {
                        // set cookie
                        $scope.setCreds($scope.username, $scope.password);
                        $http.defaults.headers.common['Authorization'] = 'Basic ' + $scope.getToken();
                        $location.path('/');
                    } else {
                        $location.path('/loginFailedForm');
                    }
                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    $location.path('/loginFailedForm');
                }
            );
        };
        // Thoát chương trình
        $scope.Logout = function () {
            var doLogOut = confirm("Log Out?");
            if (doLogOut === true) {
                //Xóa cookie
                $scope.deleteCreds();
                $http.defaults.headers.common['Authorization'] = 'Basic ';
                $location.path('/');
            } else {
                //$location.path('/');
            }
        };
        //Set đăng nhập thất bại
        function LoginFailedFormCtrl($scope) {
            $scope.loginFailMessage = "Đăng nhập thất bại";
        }
    }]);
