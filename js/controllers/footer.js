typicalAgency.controller('Footer', function($scope, $http, agencyName, $window, brandColor){
  agencyName.then(function(data){
    $scope.agencyName = $window.sessionStorage.getItem("agencyName").toLowerCase();
    if($scope.agencyName.match(/ /gi)){
      $scope.agencyName = $scope.agencyName.replace(/ /gi,'_');
    }
  });
  brandColor.then(function(data){
    $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
    $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  });
});
