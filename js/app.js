
$(document).ready(function () {
	const swiper = new Swiper('.main-slider', {
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 3000,
		},
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.slider__next',
		  prevEl: '.slider__prev',
		},

	  });

	  $( ".projects__tabs" ).tabs();
});