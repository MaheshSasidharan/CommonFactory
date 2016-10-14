var Personnel = angular.module('Personnel', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'ui-notification']);

Personnel
    .config(function (NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 3000,
            startTop: 65,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'left',
            positionY: 'bottom'
        });
    })

Personnel
.controller('LayoutPage', ['$scope', 'Factory_CommonRoutines', LayoutPage]);

function LayoutPage($scope,CommonFactory) {
    $scope.Notification = CommonFactory.Notification;
    $scope.Loading = CommonFactory.LoadingNew;
}

Personnel
.config([
    '$httpProvider', function ($httpProvider) {
        // Initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        // Enables Request.IsAjaxRequest() in ASP.NET MVC
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        // Attempted for for IE ajax caching per: http://stackoverflow.com/questions/16098430/angular-ie-caching-issue-for-http
        // disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    }
])