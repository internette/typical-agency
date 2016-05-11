typicalAgency.controller('navLink', function($scope, $window, $document, $location, $anchorScroll){
  $scope.links = ["about", "work", "clients", "contact"];
  $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
  $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  $scope.scrollDirection = 'down';
  $scope.clickEvent = function($event){
    $event.preventDefault();
    if(!$location.$$absUrl.match(/team/gi)){
        $("html, body").animate({ scrollTop: $('#'+$event.target.href.split('#')[1]).offset().top-15 }, 750);
    } else {
      window.location = $location.$$absUrl.split(/\/team/gi)[0]
    }
  }
});
