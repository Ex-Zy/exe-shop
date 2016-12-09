var mainSlider = $('.js-main-slider');

initSlider(mainSlider, {
	dots: true,
	prevArrow: '.js-main-slider-prev',
	nextArrow: '.js-main-slider-next'
});

function initSlider(slider, options) {
	slider.on('init', function() {
		setTimeout(function() {
			slider.addClass('is-ready');
		}, 200);
	});
	slider.not('.slick-initialized').slick(options);
}