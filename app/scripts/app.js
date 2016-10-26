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
  .module('textApp', ["ui.router","ngCookies"]).controller('log',['$scope','$http','$cookieStore','$cookies',function($scope,$http,$cookieStore,$cookies) {
	      
	}]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
			$stateProvider.state('index',{
				url:'/denglu',
				templateUrl:'views/main.html',
				controller:'b'
				
			}).state('zhuce',{
				url:'/zhuce',
				templateUrl:'views/about.html',
				controller:'about'
			}).state('cont',{
				url:'/cont',
				templateUrl:'views/contant.html',
				controller:'del'
			}).state('xiugai',{
				url:'/xiugai?id&title&content',
				templateUrl:'views/xiugai.html',
				controller:'del'
			})
			$urlRouterProvider.when('','/denglu')
		}])
