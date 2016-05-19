typicalAgency.controller('Header', ['$scope', '$http', '$window', 'agencyName', function($scope, $http, $window, agencyName){
  $scope.agencyName = $window.sessionStorage.getItem("agencyName");
  $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
  $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  $http.get('/api/words/buzzwords?type=business')
  .success(function(data){
    var busWords = data.words;
    $scope.slogan = "The "+busWords[randNum(0, busWords.length-1)].word;
    $http.get('/api/words/buzzwords?type=tech').success(function(data){
      var techWords = data.words;
      $scope.slogan +=  ' of '+techWords[randNum(0, techWords.length-1)].word;
    });
  })
  .error(function(data, status, headers, config) {});
  $http.get('/api/images/backgrounds').success(function(data){
    var images = data.images;
    $scope.background = images[randNum(0, images.length-1)].large.url;
    })
    .error(function(data, status, headers, config){});
    if($window.sessionStorage.getItem("agencyName").match(/ /gi)){
      $scope.agencyName = $window.sessionStorage.getItem("agencyName").replace(/ /gi,'_');
    }
  }]);
