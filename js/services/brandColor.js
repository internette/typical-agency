typicalAgency.service('brandColor', ['$http', '$window', function($http, $window) {
  return $http.get('/api/colors')
    .then(function(data) {
      var data = data.data;
      var brandColor = data.colors[randNum(0,data.colors.length-1)];
      return brandColor;
    });
}]);
