(function(){
  'use strict';
  angular.module('fox', [])
    .controller('generalController', function($scope, infoService) {
      infoService.getInfo(function(response) {
        $scope.user = response.data;
        console.log(response.data);
      });
    })
    .service('infoService', function($http){
      this.getInfo = function(callback) {
        $http.get('app/mock/user.json')
        .then(callback);
      };
    });
})();
