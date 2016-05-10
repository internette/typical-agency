typicalAgency.controller('Clients', function($scope, $http){
  var clients = [];
  $http.get('/api/clients').success(function(data){
    while (clients.length < 8){
      var singleClient = data[0].clients[randNum(0, data[0].clients.length-1)];
      if(clients.indexOf(singleClient)<=-1){
        clients.push(singleClient);
      }
    }
    $scope.clients = clients;
  });

});
