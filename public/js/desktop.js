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
      if ( $(window).width()  > 500) {
        $('#handbookLink').show();
        $('#pushArtButton').css("float", "none");
      }
      else if ( $(window).width() <= 500 )  {
        $('#handbookLink').hide();
        $('#pushArtButton').css("float", "right");
      }
    });

    $( window ).resize(function() {
      if ( $(window).height() > 500 ) {
        console.log('greater')
        $('#arrowDiv').show();
        $('.mobileDisplay').show();
      }
      else if ( $(window).height() <= 500 )  {
        console.log('lessthan')
        $('#arrowDiv').hide();
        $('.mobileDisplay').hide();
      }
    });

});
