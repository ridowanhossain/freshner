$(document).ready(function(){
	//Bootstrap Slide Control
	$('.carousel').carousel({
   	interval: 5000,	// autoplay after sliding
   	wrap: true,			// loop
   	pause: false,		// init with autoplay
   });
   // jQuery smooth scroll
  $('li.smooth-menu a').bind('click', function(event) {
      var $anchor = $(this);
      var headerH = '30';
      $('html, body').stop().animate({
          scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
      }, 1200, 'easeInOutExpo');

      event.preventDefault();
  });
	//Jquery scroll spy
	$("body").scrollspy({
        target: ".mainmenu",
        offset: 70
    }) 


	
});


$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.mainmenu').addClass('mainmenu-fixed');
  } else {
    $('.mainmenu').removeClass('mainmenu-fixed');
  }
});