typicalAgency.controller('Favicon', ['$scope', 'brandColor', '$window', function($scope, brandColor, $window){
  brandColor.then(function(data){
    $window.sessionStorage.setItem("brandColorValue", data.value);
    $window.sessionStorage.setItem("brandColorName", data.name);
    $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  });
}]);
