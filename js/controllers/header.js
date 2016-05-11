typicalAgency.controller('Header', ['$scope', '$http', 'brandColor', '$window', 'agencyName', function($scope, $http, brandColor, $window, agencyName){
  brandColor.then(function(data){
    $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
    $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  });
  agencyName.then(function(data){
    $window.sessionStorage.setItem("agencyName", data);
    $scope.agencyName = $window.sessionStorage.getItem("agencyName");
  });
  $http.get('/api/words')
  .success(function(data){
    var words = data;
    var buzzwords = words.buzzwords;
    var techBuzz = buzzwords.tech.tech;
    var busBuzz = buzzwords.business.business;
    $scope.slogan = "The "+busBuzz[randNum(0, busBuzz.length-1)] + ' of '+techBuzz[randNum(0, techBuzz.length-1)];
  })
  .error(function(data, status, headers, config) {});
  $http.get('/api/images').success(function(data){
    var images = data;
    var backgrounds = images.backgrounds.backgrounds;
    $scope.background = backgrounds[randNum(0, backgrounds.length-1)].large.url;
    })
    .error(function(data, status, headers, config){});
    if($window.sessionStorage.getItem("agencyName").match(/ /gi)){
      $scope.agencyName = $window.sessionStorage.getItem("agencyName").replace(/ /gi,'_');
    }
  }]);
