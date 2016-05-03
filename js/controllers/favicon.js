typicalAgency.controller('Favicon', function($scope, $http){
  $http.get('/api/colors')
  .success(function(colors){
    $scope.faviconColor = colors[randNum(0, colors.length)].name;
  });
});
