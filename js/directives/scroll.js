typicalAgency.directive('scroll', function($window, brandColor){
  return function($scope, element, $attrs){
    angular.element($window).bind('scroll', function(){
      if(document.body.scrollTop>=(Number(getComputedStyle(document.getElementById('header')).height.replace('px','')))-100){
        document.getElementById('nav').style.backgroundColor = $window.sessionStorage.getItem("brandColorValue");
      } else {
     document.getElementById('nav').style.backgroundColor = 'transparent';
      }
    });
  }
});
