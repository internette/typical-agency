typicalAgency.controller('FaviconSubpage', ['$scope', 'brandColor', '$window', function($scope, brandColor, $window){
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
}]);
