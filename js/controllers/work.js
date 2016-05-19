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

  $scope.projLength = new Array(8);
  // $scope.clientName = function(){
  //   return agencyName.then(function(data){
  //     return data
  //   });
  // }
  // $scope.projectType = function(){
  //   return projTypes[randNum(0, projTypes.length-1)].name;
  // }
  // $scope.projectInfo = function(){
  //   return projTypes[randNum(0, projTypes.length-1)].info;
  // }
  // $scope.projectName = function(){
  //   return
  // }
  // $scope.projects = projTypes[randNum(0, projTypes.length-1)];
  // var clientColors = [];
  // $http.get('/api/colors').success(function(data){
  //   var i = randNum(0, (data.colors.length-1));
  //   while (clientColors.length < 3){
  //     if(clientColors.indexOf(data.colors[i])<=-1){
  //       clientColors.push(data.colors[i]);
  //       i = randNum(0, (data.colors.length-1));
  //     } else {
  //       i = randNum(0, (data.colors.length-1));
  //     }
  //   }
  // });
  // $http.get('/api/images/projects').success(function(data){
  //   $scope.backgrounds = data;
  // });
  // var projects = [];
  // for (var i = 0; i<8; i++){
  //   projects.push(projTypes[randNum(0,2)]);
  // }
  // for (var i = 0; i<8; i++){
  //   agencyName.then(function(data){
  //     // projects[i].name = data;
  //     console.log(projects[i])
  //   });
  // }
  var projects = [];
  // function createProject(){
  //   $http.get('/api/words/firstwords').then(function(data){
  //     var firstword = data.data.words[randNum(0,data.data.words.length-1)].word;
  //     return firstword;
  //   }).then(function(firstword){
  //     return $http.get('/api/words/secondwords').then(function(data){
  //       var secondword = data.data.words[randNum(0,data.data.words.length-1)].word;
  //       var compName = (function(){
  //         if(secondword=== 'ster'){
  //           return firstword + secondword;
  //         } else if (secondword.match(/inc/gi)){
  //           return firstword + ', ' + secondword
  //         } else {
  //           return firstword + ' ' + secondword
  //         }
  //       })();
  //       return compName;
  //     });
  //   }).then(function(data){
  //     // projects[i].name = data;
  //     var projects = [];
  //     var project = projTypes[randNum(0, projTypes.length-1)];
  //     project.name = data;
  //     return project;
  //   }).then(function(project){
  //     if(project.type.match(/web/gi)){
  //       return $http.get('/api/images/projects?type=web').then(function(data){
  //         project.background = data.data.images[randNum(0, data.data.images.length-1)].medium.url;
  //         return project;
  //       });
  //     } else if (project.type.match(/brand/gi)) {
  //       return $http.get('/api/images/projects?type='+project.type.replace(/ing/,'').toLowerCase()).then(function(data){
  //         project.background = data.data.images[randNum(0, data.data.images.length-1)].medium.url;
  //         return project;
  //       });
  //     } else {
  //       return $http.get('/api/images/projects?type='+project.type.toLowerCase()).then(function(data){
  //         project.background = data.data.images[randNum(0, data.data.images.length-1)].medium.url;
  //         return project;
  //       });
  //     }
  //   }).then(function(project){
  //     if(project.info.match(/ThisCompany/gi)){
  //       project.info = project.info.replace(/ThisCompany/gi, (function() {
  //         var str = project.name.toLowerCase().split(' ');
  //         for(var i = 0; i < str.length; i++){
  //           str[i] = str[i].split('');
  //           str[i][0] = str[i][0].toUpperCase();
  //           str[i] = str[i].join('');
  //         }
  //         return str.join(' ');
  //       })())
  //     }
  //     return project;
  //   }).then(function(data){
  //     console.log(data);
  //   });
  // }
  var createProject = function(){
    var project = projTypes[randNum(0, projTypes.length-1)];
    return project
  }
  // var createName = function(){
  //   $http.get('/api/words/firstwords').then(function(data){
  //     var firstword = data.data.words[randNum(0,data.data.words.length-1)].word;
  //     return firstword;
  //   }).then(function(firstword){
  //     return $http.get('/api/words/secondwords').then(function(data){
  //       var secondword = data.data.words[randNum(0,data.data.words.length-1)].word;
  //       var compName = (function(){
  //         if(secondword=== 'ster'){
  //           return firstword + secondword;
  //         } else if (secondword.match(/inc/gi)){
  //           return firstword + ', ' + secondword
  //         } else {
  //           return firstword + ' ' + secondword
  //         }
  //       })();
  //       return compName;
  //     });
  //   }).then(function(name){
  //     var project = createProject();
  //     project.name = name;
  //     console.log(project);
  //     return project
  //   });
  // }
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
    // for(var i = 0; i<projects.length; i++){
    //   var project = projects[i];
    // }
    // return projects;
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
    console.log(data);
  });
}]);
