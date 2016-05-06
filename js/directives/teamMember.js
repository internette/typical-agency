typicalAgency.directive('teamMember', function() {
  return {
    restrict: 'A',
    scope: {
      person: '='
    },
    templateUrl: '/js/directives/teamMember.html'
  };
});
