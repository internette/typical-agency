typicalAgency.controller('Work', ['$scope', '$http', 'agencyName', function($scope, $http, agencyName){
  var projTypes = [
    {
      type:'Brand',
      info:'ThisCompany came to us for branding needs. Explore how we came to this approach.'
    }, {
      type:'Web',
      info:"We were called upon to rethink ThisCompany's website, from online persona to content delivery. Take a look at what we came up with."
    }, {
      type:'Marketing',
      info:"The client wanted to rethink their market strategy and came to us for help. See how we helped change public perception of ThisCompany."
    }
  ];
  var projects = [];
  $http.get('/api/words/firstwords').then(function(data){
    var firstwords = data.data.words;
    return firstwords;
  }).then(function(firstwords){
    return $http.get('/api/words/secondwords').then(function(data){
      var projects = [];
      while(projects.length<8){
        var firstword = firstwords[randNum(0,firstwords.length-1)].word;
        var secondword = data.data.words[randNum(0,data.data.words.length-1)].word;
        var compName = (function(){
          if(secondword=== 'ster'){
            return firstword + secondword;
          } else if (secondword.match(/inc/gi)){
            return firstword + ', ' + secondword
          } else {
            return firstword + ' ' + secondword
          }
        })();
        if(projects.indexOf(compName)<=-1){
          projects.push(compName);
        }
      }
      return projects;
    });
  }).then(function(compnames){
    var projects = [];
    for(var i=0; i<compnames.length; i++){
      var projType = projTypes[randNum(0, projTypes.length-1)];
      var project = {
        name: compnames[i],
        type: projType.type,
        info: (function(){
          if(projType.info.match(/ThisCompany/gi)){
            return projType.info.replace(/ThisCompany/gi, compnames[i])
          } else {
            return projType.info
          }
        })()
      };
      projects.push(project);
    }
    return projects;
  }).then(function(projects){
    $http.get('/api/images/projects').then(function(images){
      var images = images.data.images;
      function filtered(searchVal) {
        return function(element){
          return element.type === searchVal;
        }
      }
      for(var i = 0; i<projects.length; i++){
        var project = projects[i];
        var bgimgs = images.filter(filtered(project.type.toLowerCase()));
        project.backgroundImage = bgimgs[randNum(0, bgimgs.length-1)].medium.url;
      }
      return projects;
    });
    return projects;
  }).then(function(projects){
    $http.get('/api/colors').then(function(colors){
      var colors = colors.data.colors;
      function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
      }
      var client1 = colors[randNum(0, colors.length-1)].value;
      var client2 = colors[randNum(0, colors.length-1)].value;
      var client3 = colors[randNum(0, colors.length-1)].value;
      for(var i = 0; i<projects.length; i++){
        if(projects[i].type.match(/brand/gi)){
          projects[i].backgroundColor = 'rgba('+hexToRgb(client1).r+','+hexToRgb(client1).g+','+hexToRgb(client1).b+',0.75)';
        } else if(projects[i].type.match(/web/gi)){
          projects[i].backgroundColor = 'rgba('+hexToRgb(client2).r+','+hexToRgb(client2).g+','+hexToRgb(client2).b+',0.75)';
        } else {
          projects[i].backgroundColor = 'rgba('+hexToRgb(client3).r+','+hexToRgb(client3).g+','+hexToRgb(client3).b+',0.75)';
        }
      }
      return projects;
    });
    return projects;
  }).then(function(data){
    $scope.projects = data;
  });
}]);
