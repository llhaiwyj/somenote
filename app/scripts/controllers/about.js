'use strict';

/**
 * @ngdoc function
 * @name textApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of textApp
 .
 */
angular.module('textApp')
  .controller('about', ['$scope','$http','$state',function ($scope,$http,$state) {
     $scope.zhuce=function(){
     	$http({
		url:"http://www.somenote.cn:1510/users",
		method:"post",
		data:$scope.updata
	}).success(function(e){
		
        $state.go('index')		
	})
     }
  }]);
