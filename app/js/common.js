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

	changePlaceholder();
	moveImg();

	if($(window).width() > '768') {
		$('.main-nav').removeAttr('style');
		$('.header-user').removeAttr('style');
		$('.toggle-btn').removeClass('on');
	}

});


// move item image
function moveImg() {
	if($(window).width() <= '768') {
		$('.js-week-item__table').after($('.js-week-item__img'));
	} else {
		$('.js-week-item__img').appendTo($('.week-item'));
	}
}

moveImg();


//change placeholder
function changePlaceholder(){
	var target = $('.field__phone-email input[type="email"]');
	var wWidth = $(window).width();
	if (wWidth < '480') {
		target.attr('placeholder', 'Ваш Email*');
	} else {
		target.attr('placeholder', 'Мы не будем спамить, честно!*');
	}
}

changePlaceholder();


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



});