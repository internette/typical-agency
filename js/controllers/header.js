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
    var buzzwords = words[0].buzzwords;
    var techBuzz = buzzwords.tech;
    var busBuzz = buzzwords.business;
    $scope.slogan = "The "+busBuzz[randNum(0, busBuzz.length-1)] + ' of '+techBuzz[randNum(0, techBuzz.length-1)];
  })
  .error(function(data, status, headers, config) {
      // log error
      // console.log(data);
    });
    $http.get('/api/images')
    .success(function(data){
      var images = data[0].photos;
      var backgrounds = images.background;
      $scope.background = backgrounds[randNum(0, backgrounds.length-1)];
    })
    .error(function(data, status, headers, config){});
    }]);
