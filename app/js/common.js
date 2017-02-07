$(document).ready(function() {


	//	слайдер шапки
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

	//	слайдер постов
	$('.sl-post').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="sl-post-arrow sl-post-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', 
		nextArrow: '<div class="sl-post-arrow sl-post-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		asNavFor: '.sl-post-nav'
	});
	$('.sl-post-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.sl-post',
		focusOnSelect: true,
	});


	// слайдер отзывов
	
	$('.sl-clients').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 1,
	});
	$('.sl-clients-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.sl-clients',
		focusOnSelect: true,
	});

});
