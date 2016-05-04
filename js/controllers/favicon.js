typicalAgency.controller('Favicon', ['$scope', 'brandColor', function($scope, brandColor){
  brandColor.then(function(data){
    $scope.brandColor = data;
  });
}]);
