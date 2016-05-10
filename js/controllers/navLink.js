typicalAgency.controller('navLink', function($scope, $window){
  $scope.links = ["about", "work", "blog", "contact"];
  $scope.brandColorValue = $window.sessionStorage.getItem("brandColorValue");
  $scope.brandColorName = $window.sessionStorage.getItem("brandColorName");
  console.log("Hey there! \n\nThanks for looking at the Typical.Agency console. I hope you're enjoying the experience");
});
