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
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.sl-clients-nav',
		focusOnSelect: true,
	});
	$('.sl-clients-nav').slick({
		slidesToShow: 3,
		centerMode: true,
		centerPadding: "70px",
		asNavFor: '.sl-clients',
		focusOnSelect: true,
	});
	
	$("#select").click(function(){
		$(".select-item").slideToggle(
			function(){
				$("#select").toggleClass('active');
				$(".select-item li").fadeIn();
				return false;
			});
			$(".select-item li").click(function(){
				liText = $(this).text();
				$("#select span").text(liText);
				$("#select i").css({'transform': 'rotate(90deg)', 'color': '#3971ff'});
			});

	});

	$(".menu ul li").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
 });



});
