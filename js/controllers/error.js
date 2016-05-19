typicalAgency.controller('Error', ['$scope', '$window', '$http', function($scope, $window, $http){
  $http.get('/api/colors').success(function(data){
    var images = data;
    var backgrounds = images.backgrounds.backgrounds;
    $scope.background = backgrounds[randNum(0, backgrounds.length-1)].large.url;
  });
  $http.get('/api/images/backgrounds').success(function(data){
    var images = data;
    var backgrounds = images.backgrounds.backgrounds;
    $scope.background = backgrounds[randNum(0, backgrounds.length-1)].large.url;
  });
  $http.get('/api/images').success(function(data){
    var images = data;
    var backgrounds = images.backgrounds.backgrounds;
    $scope.background = backgrounds[randNum(0, backgrounds.length-1)].large.url;
  });
}]);
