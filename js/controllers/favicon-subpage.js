typicalAgency.controller('FaviconSubpage', ['$scope', 'brandColor', '$window', function($scope, brandColor, $window){
  brandColor.then(function(data){
    $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  });
}]);
