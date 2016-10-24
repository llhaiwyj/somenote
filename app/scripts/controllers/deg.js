angular.module('textApp')
  .controller('b', ['$scope','$http',function ($scope,$http) {
     $scope.deg=function(){
     	$http({
		url:"http://www.somenote.cn:1510/users/login",
		method:"post",
		data:$scope.degdata
	}).success(function(e){
		
       alert("登陆成功")		
	})
     }
  }]);