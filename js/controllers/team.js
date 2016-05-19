typicalAgency.controller('Team', ['$scope', '$http', '$window', 'agencyName', function($scope, $http, $window, agencyName){
  $scope.agencyName = $window.sessionStorage.getItem("agencyName");
  $http.get('/api/people')
  .success(function(data){
    var team = [];
    var i = randNum(0, (data.persons.length-1))
    while (team.length < 12){
      if (team.indexOf(data.persons[i])<=-1){
        data.persons[i].brandColorValue = $window.sessionStorage.getItem("brandColorValue");
        data.persons[i].brandColorName = $window.sessionStorage.getItem("brandColorName");
        team.push(data.persons[i]);
        i = randNum(0, (data.persons.length-1));
      } else {
        i = randNum(0, (data.persons.length-1));
      }
    }
    $scope.people = team;
  });
}]);
