typicalAgency.controller('Footer', function($scope, $http, agencyName, $window, brandColor, $timeout){
  agencyName.then(function(data){
    $scope.agencyName = $window.sessionStorage.getItem("agencyName").toLowerCase();
    $timeout(function(){
      if($scope.agencyName.match(/ /gi)){
        $scope.agencyName = $scope.agencyName.replace(/ /gi,'_');
      }
      if($scope.agencyName.match(/[.,\/#!$%\^&\*;:{}=\-`~()]/gi)){
        $scope.agencyName = $scope.agencyName.replace(/[.,\/#!$%\^&\*;:{}=\-`~()]/gi,'');
      }
    },500);
  });
  brandColor.then(function(data){
    $timeout(function(){
      $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
      $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
    },500);
  });
});
