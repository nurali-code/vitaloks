$('.header-top button').on('click', function () { $('.header-top').slideUp(300) })
$('.btn__menu, .header-nav__link').on('click', function () {
	window.innerWidth <= 1200 ? $('.btn__menu, .header-nav, body').toggleClass('is_active') : false;
})
$(document).on("click", ".amount__add, .amount__remove", function () {
	const $input = $(this).siblings("input[type='number']");
	let value = +$input.val();
	value += $(this).hasClass("amount__add") ? 1 : value > 1 ? -1 : 0;
	$input.val(value);
});
