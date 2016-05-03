typicalAgency.controller('Favicon', function($scope, $http){
  $http.get('/api/colors')
  .success(function(data){
    $scope.faviconColor = data[0].colors[randNum(0, colors.length)].name;
  });
});
