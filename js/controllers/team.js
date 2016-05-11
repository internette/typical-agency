typicalAgency.controller('Team', ['$scope', '$http', 'brandColor', '$window', 'agencyName', function($scope, $http, brandColor, $window, agencyName){
  brandColor.then(function(data){
    $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
    $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  });
  agencyName.then(function(data){
    $scope.agencyName = $window.sessionStorage.getItem("agencyName");
  });
  $http.get('/api/people')
  .success(function(data){
    var team = [];
    var i = randNum(0, (data.persons.length-1))
    while (team.length < 12){
      if (team.indexOf(data.persons[i])<=-1){
        data.persons[i].brandColorValue = $scope.brandColorValue;
        data.persons[i].brandColorName = $scope.brandColorName;
        team.push(data.persons[i]);
        i = randNum(0, (data.persons.length-1));
      } else {
        i = randNum(0, (data.persons.length-1));
      }
    }
    $scope.people = team;
  });
}]);
