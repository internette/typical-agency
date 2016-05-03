typicalAgency.controller('Favicon', function($scope, $http){
  $http.get('/api/colors')
  .success(function(data){
    console.log(data[0].colors);
    $scope.faviconColor = data[0].colors[randNum(0, data[0].colors.length)].name;
  });
});
