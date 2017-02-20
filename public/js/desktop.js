$(function(){
  $('nav a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;
    $('nav a.current').removeClass('current');
    $(this).addClass('current');
    $('#container').remove();
    $('#content').load(url + ' #container').hide().fadeIn('slow');
    })


    $( window ).resize(function() {
      if (screen.width>600) {
          $("#title").css('font-size', '400%');
      }
      else if (screen.width<=600)  {
        $("#title").css('font-size', '45px');
      }
    });

});
