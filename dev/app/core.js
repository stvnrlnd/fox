(function(){
  'use strict';
  angular.module('fox', [])
    .controller('generalController', function($scope, infoService) {
      infoService.getBasicInfo(function(response) {
        $scope.userBasic = response.data;
        console.log(response.data);
      });
    })
    .service('infoService', function($http){
      this.getBasicInfo = function(callback) {
        $http.get('app/mock/user.json')
        .then(callback);
      };
    });
})();
