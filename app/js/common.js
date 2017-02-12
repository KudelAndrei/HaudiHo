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
		asNavFor: '.sl-post-nav',
		arrows: false
	});
	$('.sl-post-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="sl-post-arrow sl-post-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', 
		nextArrow: '<div class="sl-post-arrow sl-post-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		asNavFor: '.sl-post',
		focusOnSelect: true,
		centerMode: true,
		responsive: [
		{
			breakpoint: 980,
			settings: {
				slidesToShow: 3,
				centerPadding: 20,
			}
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 2,
				centerPadding: 10,
			}
		}
	]
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
		arrows: false,
		focusOnSelect: true,
			responsive: [
			{
				breakpoint: 980,
				settings: {
					centerPadding: 100,
				}
			}
		]
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
				$("#select span").text(liText).css({'color':'#666'});
				$("#select i").css({'transform': 'rotate(90deg)', 'color': '#3971ff'});
				$("#select").css({'border-bottom': '1px solid #3971ff'});
			});

	});

	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
 	});

	$(".menu li").click(function(){
		$(this).siblings().removeClass("menu-active");
		$(this).addClass("menu-active");
	});

	$(".toggle-menu").click(function(){
		$(".left-panel").toggleClass("active");
		$(".menu ul li a").click(function(){
			$(this).parents(".left-panel").removeClass("active");
			$(".right-panel").click(function(){
				$(this).siblings().removeClass("active");
			});
		});
	});

	$(window).resize(function(){
		$(".left-panel").removeClass("active");
	});

	$(window).scroll(function(){
		var topScroll = $(this).scrollTop() + 100;

		if ( topScroll > $("#skills").offset().top ||  topScroll > $("#skills").offset().top + $(window).height()/2 ){
			$(".menu li").siblings().removeClass("menu-active");
			$(".menu li a[href*=skills]").parent().addClass("menu-active");
		}

		else {
			$(".menu li").siblings().removeClass("menu-active");
		}

		if ( topScroll > $("#education").offset().top ||  topScroll > $("#education").offset().top + $(window).height()/2 ){
			$(".menu li").siblings().removeClass("menu-active");
			$(".menu li a[href*=education]").parent().addClass("menu-active");
		}

		if ( topScroll > $("#experience").offset().top ||  topScroll > $("#experience").offset().top + $(window).height()/2 ){
			$(".menu li").siblings().removeClass("menu-active");
			$(".menu li a[href*=experience]").parent().addClass("menu-active");
		}

		if ( topScroll > $("#project").offset().top ||  topScroll > $("#project").offset().top + $(window).height()/2 ){
			$(".menu li").siblings().removeClass("menu-active");
			$(".menu li a[href*=project]").parent().addClass("menu-active");
		}

		if ( topScroll > $("#post").offset().top ||  topScroll > $("#post").offset().top + $(window).height()/2 ){
			$(".menu li").siblings().removeClass("menu-active");
			$(".menu li a[href*=post]").parent().addClass("menu-active");
		}

		if ( topScroll > $("#cletnts").offset().top ||  topScroll > $("#cletnts").offset().top + $(window).height()/2 ){
			$(".menu li").siblings().removeClass("menu-active");
			$(".menu li a[href*=cletnts]").parent().addClass("menu-active");
		}

		if ( topScroll > $("#say").offset().top ||  topScroll > $("#say").offset().top + $(window).height()/2 ){
			$(".menu li").siblings().removeClass("menu-active");
			$(".menu li a[href*=say]").parent().addClass("menu-active");
		}


	});

});
