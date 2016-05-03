// function apicall(endpoint){
//   var xhttp = new XMLHttpRequest();
//   xhttp.open("GET", "http://typical.agency/api/"+endpoint, true);
//   xhttp.send();
//   xhttp.onreadystatechange = function(response) {
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//       console.log(response.responseText);
//     }
//   }
//   // var apiScript = document.createElement('script');
//   // apiScript.src = 'http://typical.agency/api/'+endpoint+'?callback=callback';
//   // document.head.appendChild(apiScript);
// }
// // function callback(){
// //   console.log('this works');
// // }
// apicall('bios');

$(document).ready(function(){
  $.ajax({
    url: 'http://typical.agency/api/bios',
    dataType: 'json',
    success: function(){
      console.log('this works');
    }
  })
});
