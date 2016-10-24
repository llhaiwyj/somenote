 angular.module('textApp')
  .controller('del', ['$scope','$http','$state','$cookies','$cookieStore',function ($scope,$http,$state,$cookies,$cookieStore) {
 $scope.removeCookieinfo= function () {
                $cookieStore.remove('user');
                
                $state.go('index')
    }
 }])