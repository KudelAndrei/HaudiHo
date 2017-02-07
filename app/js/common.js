$(document).ready(function() {

	$('.sl-header').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.sl-header-nav'
	});
	$('.sl-header-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.sl-header',
		dots: false,
		focusOnSelect: true
	});



});
