typicalAgency.directive('singleWork', function() {
  return {
    restrict: 'A',
    scope: {
      project: '='
    },
    templateUrl: '/js/directives/singleWork.html'
  };
});
