typicalAgency.controller('Work', function($scope, $http){
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
    $scope.clientColors = clientColors;
    $scope.projTypes = [
      {
        name:'Branding',
        clientName: '',
        color: $scope.clientColors[0],
        info:'ThisCompany came to us for branding needs. Explore how we came to this approach.'
      }, {
        name:'Web Site',
        clientName: '',
        color: $scope.clientColors[1],
        info:"We were called upon to rethink ThisCompany's website, from online persona to content delivery. Take a look at what we came up with."
      }, {
        name:'Marketing',
        clientName: '',
        color: $scope.clientColors[2],
        info:"The client wanted to rethink their market strategy and came to us for help. See how we helped change public perception of ThisCompany."
      }
    ];

    $scope.projects = [];
    $http.get('/api/images')
    .success(function(data){
      $scope.backgrounds = data[0].photos.projects;
      $http.get('/api/words')
      .success(function(data){
        var compNames = [];
        while(compNames.length < 8){
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
        i = 0 ;
        while (i<compNames.length){
          var proj = [];
          proj.clientName = compNames[i];
          var projType = $scope.projTypes[randNum(0, $scope.projTypes.length-1)];
          proj.name = projType.name;
          proj.color = 'rgba('+parseInt(projType.color.value.replace(/#/gi, '').substring(0,2), 16)+','+parseInt(projType.color.value.replace(/#/gi, '').substring(2,4), 16)+','+parseInt(projType.color.value.replace(/#/gi, '').substring(4,6), 16)+',0.6)';
          if(projType.info.match(/ThisCompany/gi)){
            proj.info = projType.info.replace(/ThisCompany/gi, proj.clientName);
          } else {
            proj.info = projType.info;
          }
          if(proj.name.match(/marketing/gi)){
            proj.bgimg = $scope.backgrounds.marketing[randNum(0, $scope.backgrounds.marketing.length-1)];
          } else if(proj.name.match(/web site/gi)){
            proj.bgimg = $scope.backgrounds.web[randNum(0, $scope.backgrounds.web.length-1)];
          } else if(proj.name.match(/brand/gi)){
            proj.bgimg = $scope.backgrounds.brand[randNum(0, $scope.backgrounds.brand.length-1)];
          }
          $scope.projects.push(proj);
          i++;
        }
    });
    });
  });
});
