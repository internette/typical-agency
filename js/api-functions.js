window.onload = function(){
  document.querySelector('input[type="submit"]').addEventListener('click', function(e){
    $(document).ajaxStart(function(e){
      $('#loading').addClass('show');
    });
    $(document).ajaxComplete(function(e){
      $('#loading').removeClass('show');
    });
    $.ajax({
      //http:///typical.agency/api/
      url: 'http://localhost:8080/api/'+e.target.previousElementSibling.value,
      dataType: 'jsonp',
      success: function(data){
        var res = JSON.stringify(data, null, 2);
        // res = res.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        document.getElementById('result').innerHTML = res;
      },
      error: function(data){
        document.getElementById('result').innerHTML = 'There is an error. Check to see if this is actually a valid endpoint.';
      }
    });
  });
}
