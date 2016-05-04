typicalAgency.directive('aboutCol', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/aboutCol.html'
  };
});
