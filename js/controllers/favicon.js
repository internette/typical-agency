typicalAgency.controller('Favicon', ['$scope', 'brandColor', '$window', 'agencyName', function($scope, brandColor, $window, agencyName){
  brandColor.then(function(data){
    $window.sessionStorage.setItem("brandColorValue", data.value);
    $window.sessionStorage.setItem("brandColorName", data.name);
    $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
    $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  });
  agencyName.then(function(data){
    $window.sessionStorage.setItem("agencyName", data);
    $scope.agencyName = $window.sessionStorage.getItem("agencyName");
  });
}]);
