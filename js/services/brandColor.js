typicalAgency.service('brandColor', ['$http', '$window', function($http, $window) {
  return $http.get('/api/colors')
    .then(function(data) {
      var brandColor = data.data[0].colors[randNum(0,data.data[0].colors.length-1)];
      return brandColor;
    });
}]);
