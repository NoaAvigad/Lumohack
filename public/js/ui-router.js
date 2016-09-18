'use strict'

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/main', {
      templateUrl: '../views/main.html'
      controller: 'controllers/MainController.js'	
    })

    .when('/profile', {
      templateUrl: 'templates/profile.html'
    })

    .when('/messaging', {
      templateUrl: 'templates/messaging.html'
    });

   $locationProvider.html5Mode(true);

});

  
