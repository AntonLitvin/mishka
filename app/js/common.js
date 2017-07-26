//preloader
$(window).on('load', function() { 
	$('.loader-inner').fadeOut(); 
	$('.loader').delay(400).fadeOut('slow'); 
});


$(function() {


// mobile menu
$('.toggle-btn').on('click', function() {
	$(this).toggleClass('on');
	$('.main-nav').slideToggle();
	$('.header-user').slideToggle();
	return false;
});

$(window).resize(function(){
	if($(window).width() > '768') {
		$('.main-nav').removeAttr('style');
		$('.header-user').removeAttr('style');
		$('.toggle-btn').removeClass('on');
	}
	moveImg();
});

moveImg();

// move item image
function moveImg() {
	if($(window).width() <= '768') {
		$('.js-week-item__table').after($('.js-week-item__img'));
	} else {
		$('.js-week-item__img').appendTo($('.week-item'));
	}
}

// Slider
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	slidesPerView: 1,
	paginationClickable: true,
	spaceBetween: 30,
	loop: true
});

//Remove map overlay
$(function(){
	$('.map-overlay').on('click', function() {
		$(this).remove();
	});
});



});




