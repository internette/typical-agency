typicalAgency.service('brandColor', ['$http', function($http) {
  return $http.get('/api/colors')
    .then(function(data) {
      return data.data[0].colors[randNum(0,data.data[0].colors.length-1)];
    });
}]);
