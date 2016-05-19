typicalAgency.service('agencyName', ['$http', '$window', function($http, $window) {
  var compName = '';
  var firstWord = '';
  return $http.get('/api/words/firstwords')
  .then(function(data){
    var words = data.data.words;
    var firstCompWord = words[randNum(0, words.length-1)].word;
    return $http.get('/api/words/secondwords').then(function(data){
      var secondwords = data.data.words;
      var secondCompWord = secondwords[randNum(0, secondwords.length-1)].word;
      var compName = (function(){
        if(secondCompWord === 'ster'){
          return firstCompWord + secondCompWord;
        } else if (secondCompWord.match(/inc/gi)){
          return firstCompWord + ', ' + secondCompWord
        } else {
          return firstCompWord + ' ' + secondCompWord
        }
      })();
      return compName;
    });
  });
}]);
