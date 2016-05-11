typicalAgency.service('agencyName', ['$http', '$window', function($http, $window) {
  return $http.get('/api/words')
  .then(function(data){
    var words = data.data;
    var compFirstWords =  words.firstwords.firstwords;
    var compSecondWords =  words.secondwords.secondwords;
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
    return compName;
  });
}]);
