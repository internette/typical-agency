typicalAgency.directive('navLink', function($window) {
  return {
    restrict: 'E',
    scope: {
      link: '='
    },
    templateUrl: '/js/directives/navLink.html'
  };
});
