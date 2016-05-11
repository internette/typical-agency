typicalAgency.controller('Blurb', ['$scope', 'brandColor', '$window', '$http', 'agencyName', function($scope, brandColor, $window, $http, agencyName){
  brandColor.then(function(data){
    $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
    $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  });
  $http.get('/api/bios').success(function(data){
    var blurb = data.bios[randNum(0, data.bios.length-1)];
    $scope.bio = blurb.bio;
    $scope.bgImg = blurb.img;
    $scope.tagline = blurb.tagline;
  });
}]);
