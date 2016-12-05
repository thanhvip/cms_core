angular.module('appRoutes', []).config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        /*Điều hướng 404*/
        $urlRouterProvider.otherwise("/404.html");
        /*Thiết lập các state*/
        $stateProvider
            // điều hướng về trang chủ
            .state('home', {
                url: "/",//đường dẫn thực tế của route
                templateUrl: "views/home.html",//đường dẫn tới view.
                controller: 'baseController'//tên controller sẽ xử lý chính trên route này.
            })
            // điều hướng về trang danh sách list
            .state('list', {
                url: "/list-post",
                templateUrl: "views/list.html",
                controller: 'ListPostController'
            })
            // điều hướng về trang thêm mới create
            .state('create', {
                url: "/create-post",
                templateUrl: "views/create.html",
                controller: 'CreatePostController'
            })
             /*===============404 NOT FOUND================*/
            .state('404', {
            url: "/404.html",
            templateUrl : 'views/404.html',
            title: '404 - Không tìm thấy trang yêu cầu'
            });
        $locationProvider.html5Mode({ // html5Mode để thiết lập đường dẫn gọn hơn, nó sẽ loại bỏ ‘#!’ trên đường dẫn.
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix('!');
    }]);