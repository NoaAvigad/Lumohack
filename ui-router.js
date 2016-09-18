'use strict'

var myApp = angular.module('myApp', ['ngRoute']); 

myApp.config(function ($routeProvider) {

  $routeProvider

    .when ('/', {
      templateUrl: 'templates/main.html'
    })

    .when('/profile', {
      templateUrl: 'templates/profile.html'
    })

    .when('/messaging', {
      templateUrl: 'templates/messaging.html'
    })

});

  
