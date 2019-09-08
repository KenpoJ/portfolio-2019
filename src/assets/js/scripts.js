$(document).ready(function() {

var n = $('.tab-container .nav');
var l = $('.tab-container .nav a');

$('.tab-pane').hide();
$('#core').show();

l.click(function(e) {
  e.preventDefault();
  var href = $(this).attr('href');

  l.removeClass('active');
  $(this).addClass('active');
  
  $('.tab-pane').fadeOut('slow', function() {
    $(href).fadeIn('slow');
  });
})

})