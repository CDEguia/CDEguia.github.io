function winResize() {
  $('#home').height(window.innerHeight);
  $('#connect').height(window.innerHeight);
}
function showNavOnMove(event) {
    var y = event.clientY;
    var isHidden = $('#navgation').is(':visible');
    if((y >=0 && y<=50) && isHidden != true){
        window.scrollBy(0, -1);
    }
}
$(document).ready(function () {
  winResize();
});


$(window).resize(function () {
  winResize();
});

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function (e) {
  var id = $(this).attr('href'); // target element id

  var $id = $(id); // target element

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $(id).offset().top;

  // animated top scrolling
  $('body, html').animate({
    scrollTop: pos
  }, 'slow');
});
var previous_scroll = $(window).scrollTop();

$(window).on('scroll', function () {
  var scroll = $(window).scrollTop(),
      scroll_change = scroll - previous_scroll;
  previous_scroll = scroll;
    revealOnScroll();
  $(window).trigger('custom_scroll', [scroll_change]);

});

$(window).on('custom_scroll', function pos(e, scroll_change) {
  if (scroll_change > 0) {
    $('#navgation').slideUp("slow");
  } else {
    $('#navgation').slideDown("slow"); 
  }
});

// animate the navigation bar on loading of window
$(window).load(function() {
    $( "#navgation" ).show( 1500, function(){$('h1').slideDown(1500);});

});

function revealOnScroll() {
    var scrolled = $(window).scrollTop(),
        win_height_padded = $(window).height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
        var $this     = $(this),
            offsetTop = $this.offset().top;
      
        if (scrolled + win_height_padded >= offsetTop + 150 && scrolled <= offsetTop + win_height_padded ) {
                $this.addClass('animated');
            $this.addClass('rightRotated');
           
        }
    });
    // Hidden...
    $(".revealOnScroll.animated").each(function (index) {
        var $this     = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded < offsetTop || scrolled > offsetTop + win_height_padded ) {
            $(this).removeClass('animated')
        }
    });
}

revealOnScroll();