var typicalAgency = angular.module("typicalAgency",[]);
var brandColor = {
  name: '',
  value: ''
};
function randNum(min, max){
  return Math.floor(Math.random() * (max-min + 1)) + min;
}
