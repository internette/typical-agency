typicalAgency.controller('navLink', function($scope, $window, $document, $location, $anchorScroll){
  $scope.links = ["about", "work", "clients", "contact"];
  $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
  $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  $scope.scrollDirection = 'down';
  $scope.clickEvent = function($event){
    $event.preventDefault();
    if(!$location.$$absUrl.match(/team/gi) && !$event.target.id.match(/menu-btn/gi)){
        $("html, body").animate({ scrollTop: $('#'+$event.target.href.split('#')[1]).offset().top-15 }, 750);
    } else if ($event.target.id.match(/menu-btn/gi)){
      if($event.target.nextElementSibling.className.match(/active/gi)){
        $event.target.nextElementSibling.className = $event.target.nextElementSibling.className.replace(/ active/gi,'');
      } else {
        $event.target.nextElementSibling.className += ' active';
      }
    } else {
      window.location = $location.$$absUrl.split(/\/team/gi)[0]
    }
  }
});
