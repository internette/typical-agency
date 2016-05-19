typicalAgency.controller('FaviconSubpage', ['$scope', 'brandColor', '$window', 'agencyName', function($scope, brandColor, $window, agencyName){
  brandColor.then(function(data){
    if($window.sessionStorage.getItem("brandColorValue")===null){
      $window.sessionStorage.setItem("brandColorValue", data.value);
      $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
    } else {
      $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
    }
    if($window.sessionStorage.getItem("brandColorName")===null){
      $window.sessionStorage.setItem("brandColorName", data.value);
      $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
    } else {
      $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
    }
  });
  agencyName.then(function(data){
    if($window.sessionStorage.getItem("agencyName")===null){
      $window.sessionStorage.setItem("agencyName", data);
      $scope.agencyName = $window.sessionStorage.getItem("agencyName");
    } else {
      $scope.agencyName = $window.sessionStorage.getItem("agencyName");
    }
  });
}]);
