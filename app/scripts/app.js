'use strict';

/**
 * @ngdoc overview
 * @name notetakeruiApp
 * @description
 * # notetakeruiApp
 *
 * Main module of the application.
 */
angular
  .module('notetakeruiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'    
      }).
      when('/list', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'    
      }).
      when('/new', {
        templateUrl: 'views/newnote.html',
        controller: 'MainCtrl',
        controllerAs: 'main'        
      }).
      otherwise({
        redirectTo: '/'
      });
  });