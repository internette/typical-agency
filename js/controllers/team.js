typicalAgency.controller('Team', ['$scope', '$http', 'brandColor', '$window', function($scope, $http, brandColor, $window){
  brandColor.then(function(data){
    $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
    $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  });
  $http.get('/api/people')
  .success(function(data){
    var team = [];
    // for (var i = 0; i<data[0].length; i++){
    //   if(return data.data[0].colors[randNum(0,data.data[0].colors.length-1)];)
    // }
    var i = randNum(0, (data[0].persons.length-1))
    while (team.length < 12){
      if (team.indexOf(data[0].persons[i])<=-1){
        data[0].persons[i].brandColorValue = $scope.brandColorValue;
        data[0].persons[i].brandColorName = $scope.brandColorName;
        team.push(data[0].persons[i]);
        i = randNum(0, (data[0].persons.length-1));
      } else {
        i = randNum(0, (data[0].persons.length-1));
      }
    }
    $scope.people = team;
  });
}]);
