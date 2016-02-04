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
  $('#left').click(function() {
    if ($('.navi').css('display') == 'inline-block') {
      $('.navi').css({'display':'none'});
      $('.topBar').css({'width':'50px'});
      return;
    }
    $('.topBar').css({'width':'100%'});
    $('.navi').css({'display':'inline-block'});
  });
});  

