$(function(){
  $('#next').on('click', next)
  $( ".mobileDisplay" ).on( "swiperight", next );

  $('#prev').on('click', prev)
  $( ".mobileDisplay" ).on( "swipeleft", prev );

  $("body").keydown(function(e) {
    if(e.keyCode == 37) {
      prev();
    }
    else if(e.keyCode == 39) {
      next();
    }
  });


  function next() {
    // caches currently viewed and other cards
    var $current = $('.seen')
    var $unseen = $('.mobileDisplay').not('.seen');

    // sets z-index of currently viewd card to 0
    $current.css("z-index",'0');

    // adds 1 to z-index of each other card
    $unseen.each( function () {
      $(this).css("z-index",(parseInt($(this).css("z-index")) + 1 + ''));
    });

    // annimates movement of viewd card

    // resets classes to have seen card on the top
    var $next = $current.removeClass('seen').next('.mobileDisplay');
      if ($next.length) {
          $next.addClass('seen');
      }
      else {
          $(".mobileDisplay:first").addClass('seen');
      }
  };

  function prev() {
    // get z-indexes right on prev
    $(".mobileDisplay").each(function() {
      if ($(this).css('z-index') == 0) {
        $(this).css("z-index",'3');
        }
      else {
        $(this).css("z-index",(parseInt($(this).css("z-index")) - 1 + ''));
      }
    });

    // clears all seen classes then adds class seen to top card
    $(".mobileDisplay").each(function prev () {
      $(this).removeClass('seen')
      if ($(this).css('z-index') == 3) {
        $(this).addClass("seen");
      }
    });
  }

});




























// $current.animate({left: '950px', opacity:0.0}, 'slow').removeClass('current')
  // .css({
  //
  //     //for firefox
  //     "-moz-animation-name":"rotatebox",
  //     "-moz-animation-duration":"0.8s",
  //     "-moz-animation-iteration-count":"1",
  //         "-moz-animation-fill-mode":"forwards",
  //
  //     //for safari & chrome
  //     "-webkit-animation-name":"rotatebox",
  //     "-webkit-animation-duration":"0.8s",
  //     "-webkit-animation-iteration-count":"1",
  //     "-webkit-animation-fill-mode" : "forwards",
  //
  //   })
