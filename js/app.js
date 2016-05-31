var typicalAgency = angular.module("typicalAgency",[]);
function randNum(min, max){
  return Math.floor(Math.random() * (max-min + 1)) + min;
}
$(function() { // when the DOM is ready...
    //  Move the window's scrollTop to the offset position of #now
    setTimeout(function(){
      // $(window).scrollTop($('#about').offset().top);
      $("html, body").animate({ scrollTop: $('#'+window.location.pathname.replace(/(\/)/gi,'')).offset().top-15 }, 750);
    }, 200);
});
