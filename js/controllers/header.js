typicalAgency.controller('Header', ['$scope', '$http', 'brandColor', '$window', function($scope, $http, brandColor, $window){
  brandColor.then(function(data){
    $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
    $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  });
  $http.get('/api/words')
  .success(function(data){
    var words = data;
    var buzzwords = words[0].buzzwords;
    var techBuzz = buzzwords.tech;
    var busBuzz = buzzwords.business;
    var compFirstWords =  words[0].firstwords;
    var compSecondWords =  words[0].secondwords;
    var firstWord = compFirstWords[randNum(0, compFirstWords.length-1)];
    var secondWord = compSecondWords[randNum(0, compSecondWords.length-1)];
    var compName = (function(){
      if(secondWord === 'ster'){
        return firstWord + secondWord;
      } else if (secondWord.match(/inc/gi)){
        return firstWord + ', ' + secondWord

      } else {
        return firstWord + ' ' + secondWord
      }
    })();
    $scope.name = compName;
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
