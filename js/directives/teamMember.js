typicalAgency.directive('teamMember', function() {
  return {
    restrict: 'E',
    scope: {
      person: '='
    },
    templateUrl: 'js/directives/teamMember.html'
  };
});
