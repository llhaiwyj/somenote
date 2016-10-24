'use strict';

/**
 * @ngdoc overview
 * @name textApp
 * @description
 * # textApp
 *
 * Main module of the application.
 */
angular
  .module('textApp', ["ui.router"]).controller('log',['$scope','$http',function ($scope,$http) {
	     
	}]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
			$stateProvider.state('index',{
				url:'/denglu',
				templateUrl:'views/main.html',
				controller:'b'
				
			}).state('zhuce',{
				url:'/zhuce',
				templateUrl:'views/about.html',
				controller:'about'
			})
			$urlRouterProvider.when('','/denglu')
		}])
