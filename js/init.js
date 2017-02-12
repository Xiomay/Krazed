(function($){
  'use strict';
  $(function(){
  
	  //**Mateialize Mobile Menu**
    $('.button-collapse').sideNav();

  	}); 

	//**Button Scroll Effect**
	$("#read-more-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#read-more").offset().top
    }, 500);
	});
	
	// **Homepage - Picture Slider**
	$(document).ready(function(){
      $('.slider').slider({
	  
	  	indicators: false,
		interval: 5000,
		height: 500
		
	  });
    });
	
	
	// end of document ready
})(jQuery); // end of jQuery name space

	
	
	

	