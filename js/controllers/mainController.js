typicalAgency.controller('MainController', ['$scope', 'brandColor', function($scope, brandColor){
  brandColor.success(function(data){
    $scope.brandColor = data[0].colors[randNum(0, data[0].colors.length)];
  });
}]);
