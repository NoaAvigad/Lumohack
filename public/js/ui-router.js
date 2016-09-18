'use strict'

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/main', {
      templateUrl: '../views/main.html',
      controller: 'MainController'
    })

    .when('/profile', {
      templateUrl: 'templates/profile.html'
    })

    .when('/messaging', {
      templateUrl: 'templates/messaging.html'
    });

   $locationProvider.html5Mode(true);

}]);

  
