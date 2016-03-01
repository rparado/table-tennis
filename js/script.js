(function($) {

	'use strict';

	$(function() {
		var isTouch = Modernizr.touch;
		// Show/hide mobile menu
		$('.hamburger-js').on('click', function(e) {
			e.preventDefault();
			var elem = $(this);
			elem.parent().parent().toggleClass('header--open');
		});

		// Detect if touch is available then trigger hamburger click event
		// this will only trigger on mobile devices
		/*if (isTouch) {
			$('.menu-js').on('click', function(e) {
				var isLessTab = Modernizr.mq('only all and (max-width: 966px)');
				e.preventDefault();
				if (isLessTab) {
					$('.hamburger-js').trigger('click');
				}
			});
		}*/
		$('.navigation > ul > li').on('click', function() {
			$('.navigation > ul > li.active').removeClass('active');
			$(this).addClass('active');
		});
		// waypoint triggers
		$('.wp1').waypoint(function() {
			$('.wp1').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});

		$('.wp2').waypoint(function(){
			$('.wp2').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});

		$('.wp3').waypoint(function() {
			$('.wp3').addClass('animated fadeInUp')
		}, {
			offset: '75%'
		});
		$('.wp4').waypoint(function(){
			$('.wp4').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});

		$('.wp5').waypoint(function(){
			$('.wp5').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});

		$('.wp6').waypoint(function(){
			$('.wp6').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});

		$('.wp7').waypoint(function(){
			$('.wp7').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});

		$('.wp8').waypoint(function(){
			$('.wp8').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});

		$('.wp9').waypoint(function(){
			$('.wp9').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});

		$(window).scroll(function() {

		    if ($(window).scrollTop() > 50) {
		        $('.header').addClass('sticky');
		    } else {
		        $('.header').removeClass('sticky');
		    }
		});

	});
})(jQuery);
