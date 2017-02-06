(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); 
	
	$('.fade').slick({
	dots: false,
	infinite: true,
	autoplay: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	arrows: false,
	pauseOnHover: false,
	mobileFirst: true
});
	
	
	// end of document ready
})(jQuery); // end of jQuery name space