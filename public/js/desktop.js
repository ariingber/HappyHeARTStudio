$(function(){

  function windowChangesHeight () {
    if ( $(window).height() > 700 ) {
      $('#arrowDiv').show();
      $('.mobileDisplay').css("top", "50%");
    }
    else if ( $(window).height() <= 700 )  {
      $('#arrowDiv').hide();
      $('.mobileDisplay').css("top", "60%");
    }
  };

  function windowChangesWidth () {
    var value = $(window).width();
     if (value > 600) {
       $('#handbookLink').show();
       $("#map").show();
       $('#pushArtButton').css("float", "none");
       $( "h2" ).css( "font-size", "30px" )
       $("#pushArtButton").text("see kids' art!");
     } else if ((value <= 600) && (value > 500)){
       $('#handbookLink').hide();
       $('#pushArtButton').css("float", "right");
       $("#mainTitle").text("happy heART studio");
       $( "h2" ).css( "font-size", "25px" )
       $("#map").show();
       $("#pushArtButton").text('next');
     }
     else if (value < 500) {
       $('#handbookLink').hide();
       $('#pushArtButton').css("float", "right");
       $("#mainTitle").text("happy heART");
       $( "h2" ).css( "font-size", "14px" )
       $("#map").hide();
       $("#pushArtButton").text('next');
     }

    // if ( $(window).width()  > 500) {
    //   $('#handbookLink').show();
    //   $('#pushArtButton').css("float", "none");
    // }
    // else if ( $(window).width() <= 500 )  {
    //   $('#handbookLink').hide();
    //   $('#pushArtButton').css("float", "right");
    // }
  };
  windowChangesHeight();
  windowChangesWidth();

  $( window ).resize(function() {
    windowChangesHeight();
    windowChangesWidth();
  });


  $('nav a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;
    $('nav a.current').removeClass('current');
    $(this).addClass('current');
    $('#container').remove();
    $('#content').load(url + ' #container').hide().fadeIn('slow');
    })

    // $( window ).resize(function() {
    //   if ( $(window).height() > 700 ) {
    //     $('#arrowDiv').show();
    //     $('.mobileDisplay').css("top", "50%");
    //   }
    //   else if ( $(window).height() <= 700 )  {
    //     $('#arrowDiv').hide();
    //     $('.mobileDisplay').css("top", "60%");
    //   }
    // });

});
