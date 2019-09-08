$(document).ready(function() {

var n = $('.tab-container .nav');
var l = $('.tab-container .nav a');

$('.tab-pane').hide();
$('#core').show();

l.click(function(e) {
  e.preventDefault();
  var t = $(this);
  var href = t.attr('href');

  // navigation highlighting
  l.removeClass('active');
  $(this).addClass('active');
  
  // tab-pane content
  $('.tab-pane').fadeOut('fast');
  switch(href) {
    case '#core':
      $('#core').fadeIn();
      break;
    case '#prof':
      $('#prof').fadeIn();
      break;
    case '#other':
      $('#other').fadeIn();
      break;
  }
})

})