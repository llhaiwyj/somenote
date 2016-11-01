angular.module('textApp')
  .controller('b', ['$scope','$http','$state','$cookies','$cookieStore',function ($scope,$http,$state,$cookies,$cookieStore) {
  	 if($cookies.get("user",$scope.degdata)){
  	$state.go('cont')
 }


     $scope.deg=function(){
     	$http({
		url:"http://www.somenote.cn:1510/users/login",
		method:"post",
		data:$scope.degdata
	}).success(function(e){
		

		$cookieStore.put("lll",e.uid);
		
	    if($scope.check==true){
	    	 $cookieStore.put("user",$scope.degdata);
	    	 var expireDate = new Date();
		     expireDate.setDate(expireDate.getDate() + 6);
		     // Setting a cookie
		     $cookies.put('user', $scope.degdata, {'expires': expireDate});

	    }
	
	   $state.go('cont')
	  	
	})
     }
  }]);