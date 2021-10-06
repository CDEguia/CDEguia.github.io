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
  var h1 = document.querySelector('#knowledge-Box');
  if (isInViewport(h1)) {
    revealOnScroll();
  }
  
  $(window).trigger('custom_scroll', [scroll_change]);

});

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 ||
      //bounding.left >= 0 &&
      (bounding.bottom) <= (window.innerHeight || document.documentElement.clientHeight)
      //bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
/*
// Reveal navigation bar on scrolling up
$(window).on('custom_scroll', function pos(e, scroll_change) {
  if (scroll_change > 0) {
    $('#navigation').slideUp("slow");
  } else {
    $('#navigation').slideDown("slow"); 
  }
});
*/
// animate the navigation bar on loading of window
$(window).load(function() {
  
  slideDownNav();

  slideInProfilePic();
  
});

function slideInProfilePic() {
  var scrolled = $(window).scrollTop();
  var  win_height_padded = $(window).height() * 1.1;

  $('.profilePic:not(.slide-in').each(function(){
    var $this     = $(this),
    offsetTop = $this.offset().top;
    if (scrolled + win_height_padded >= offsetTop*1.1 && scrolled <= offsetTop + win_height_padded ) {
        this.style.visibility='visible';
        $this.addClass('slide-in');  
    }
  });
  $(".profilePic.slide-in").each(function (index) {
  var $this     = $(this),
      offsetTop = $this.offset().top ;
    if (scrolled + win_height_padded < offsetTop || scrolled > offsetTop + win_height_padded*.5 ) {
        $(this).removeClass('slide-in');
        this.style.visibility='hidden';
    }
  });
}

function slideDownNav() {
  $( "#navigation" ).show( 500, function(){$('h1').slideDown(500);});
}

function revealOnScroll() {
  
  var scrolled = $(window).scrollTop(),
  win_height_padded = $(window).height() * 2.75;
  
  // Showed...
  $(".revealOnScroll:not(.animated)").each(function () {
    var $this     = $(this);       
    $this.addClass('animated');
    $this.addClass('rightRotated');     
  });
  // Hidden...
  //$(".revealOnScroll.animated").each(function (index) {
  //    var $this     = $(this),
  //        offsetTop = $this.offset().top ;
  //    if (scrolled + win_height_padded < offsetTop || scrolled > offsetTop + win_height_padded*.9) {
  //        $(this).removeClass('animated')
  //    }
  //});
}

revealOnScroll();