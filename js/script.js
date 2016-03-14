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
		        $('.header').addClass('sticky animated fadeInDown');
		    } else {
		        $('.header').removeClass('sticky animated fadeInDown');
		    }
		    if ($(window).scrollTop() > 300) {
		    	 $('.gallery-item').addClass('animated fadeInDown');
		    } else {
		    	 $('.gallery-item').removeClass('animated fadeInDown');
		    }
		});
		$(".fancybox").fancybox({
			nextEffect	: 'fade',
			prevEffect	: 'fade',
			helpers		: {
				title	: { type : 'inside' },
				buttons	: {}
			},
			fitToView: true
		});

		function clickIE() {if (document.all) {(message);return false;}} 
		function clickNS(e) {if 
		(document.layers||(document.getElementById&&!document.all)) { 
		if (e.which==2||e.which==3) {(message);return false;}}} 
		if (document.layers) 
		{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;} 
		else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;} 
		document.oncontextmenu=new Function("return false") 
	});
})(jQuery);
