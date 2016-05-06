typicalAgency.controller('work', function($scope, $http){
  var clientColors = [];
  $http.get('/api/colors').success(function(data){
    var i = randNum(0, (data[0].colors.length-1));
    while (clientColors.length < 3){
      if(clientColors.indexOf(data[0].colors[i])<=-1){
        clientColors.push(data[0].colors[i]);
        i = randNum(0, (data[0].colors.length-1));
      } else {
        i = randNum(0, (data[0].colors.length-1));
      }
    }
  });
  $scope.projTypes = [
    {
      name:'Logo',
      color: clientColors[0],
      info:$scope.companies[randNum(0,($scope.companies.length-1))]+' came to us for branding needs. Explore how we came to this approach.'
    }, {
      name:'Web Site',
      color: clientColors[1],
      info:"We were called upon to rethink the client's website. Take a look at what we came up with."
    }, {
      name:'Marketing',
      color: clientColors[2],
      info:"The client wanted to rethink their market strategy and came to us for help. See how we helped change public perception of "+$scope.companies[randNum(0,($scope.companies.length-1))]+"."
    }
  ];
  $http.get('/api/words')
  .success(function(data){
    var compNames = [];
    while(compNames.length < 10){
      var compName1 = data[0].firstwords[randNum(0, data[0].firstwords.length-1)];
      var compName2 = data[0].secondwords[randNum(0, data[0].secondwords.length-1)];
      var compName = (function(){
        if(compName2 === 'ster'){
          return compName1 + compName2;
        } else if (compName2.match(/inc/gi)){
          return compName1 + ', ' + compName2

        } else {
          return compName1 + ' ' + compName2
        }
      })();
      if(compNames.indexOf(compName)<=-1){
        compNames.push(compName);
      }
    }
    $scope.companies = compNames;
  });
});
