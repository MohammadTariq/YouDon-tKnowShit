angular.module("EmailApp",[
    'ngRoute'
]).config(function($routeProvider){
    $routeProvider
    .when('/inbox/test', {
        templateUrl: 'views/inbox.html',
        controller: 'inbxCtrl',
    })
    .otherwise({
        redirectTo: '/inbox/test'
    });
});