typicalAgency.directive('navLink', function() {
  return {
    restrict: 'E',
    scope: {
      link: '='
    },
    templateUrl: 'js/directives/navLink.html'
  };
});
