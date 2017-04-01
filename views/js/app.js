'use strict';

var angular = require('angular');

var app = agular.module('mirror', [
  require('angular-route'),
  require('angular-material'),
  require('angular-sanitiz'),
  require('angular-messages'),
  require('angular-local-storage'),
  require('angular-ui-bootstrap')
]);

require('./filters');
require('./services');
require('./controllers');

app.config(function($routeProvider,
  $localProvider,
  localStorageServiceProvider,
  $httpProvider,
  $compileProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
      })
      .when('/off',{
        templateUrl: 'views/off.html',
      })
      .when('/news', {
        templateUrl: 'views/news.html',
      })
      .when('/reminders', {
        templateUrl: 'views/reminders.html',
      })
      .otherwise({
        redirectTo: 'views/home.html',
      });
      $locationProvider.html5Mode(true);
      $httpProvider.useApplyAsync(true);
      $compileProvider.debugInfoEnabled(false);

      localStorageServiceProvider
        .setPrefix('mirror')
        .setStorageType('sessionStorage')
        .setStorageCookieDomain('');
  })
