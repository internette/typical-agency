typicalAgency.directive('singleWord', function() {
  return {
    restrict: 'E',
    scope: {
      company: '='
    },
    templateUrl: 'js/directives/singleWork.html'
  };
});
