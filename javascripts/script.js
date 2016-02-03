$(window).load(function() {
    $( ".topBar" ).show( 1500 );
     $('h1').slideDown(1500);  
     $('.btn-main').show(1500); 
});

$(document).ready(function() {
  
    $('h1').mouseenter(function() {
      $(this).fadeOut(1000);
      $(this).fadeIn(1000); 
    });
    
    $('.btn-main').mouseenter(function() {
      $(this).fadeOut(500);
      $(this).fadeIn(500);   
    });
      
     
});

$(function() {
  var poped;
  ( $('.navi').css('display') == 'none')? poped = false : poped = true; 
  
  $('#left').click(function() {
    if (poped) {
      $('.navi').css({'display':'none'});
      $('.topBar').css({'width':'50px'});
      poped = false;
      return;
    }
    $('.topBar').css({'width':''});
    $('.navi').css({'display':'inline-block'});
    poped = true;
  });
});

