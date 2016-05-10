typicalAgency.directive('singleClient', function() {
  return {
    restrict: 'A',
    scope: {
      client: '='
    },
    templateUrl: '/js/directives/client.html'
  };
});
