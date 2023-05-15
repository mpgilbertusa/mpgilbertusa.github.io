(function ($) {
  $(document).ready(function () {

    $('#entire-wrapper').css('min-height',$(window).height());
    $('body').addClass('background-1');

    setInterval(function() {
      var body = $('body');
      var rel = $(body).attr('rel');
      body.removeClass('background-'+rel);
      rel = parseInt(rel)+1;
      if(rel>3) {
        rel = 1;
      }
      body.addClass('background-'+rel);
      body.attr('rel',rel);
      body.css('transition',' 1.5s');
    },6000);
     
     setInterval(function() {
         $('#entire-wrapper').css('min-height',$(window).height());
     },1000)
  });
})(jQuery);
