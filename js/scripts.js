document.querySelector('.header-top button').onclick = () =>
	document.querySelector('.header-top').style.display = 'none';

document.querySelectorAll('.btn__menu, .header-nav__link').forEach(el =>
	el.onclick = () => {
		if (window.innerWidth <= 1200) {
			document.body.classList.toggle('is_active');
			document.querySelectorAll('.btn__menu, .header-nav').forEach(item =>
				item.classList.toggle('is_active')
			);
		}
	}
);

document.addEventListener('click', ({ target }) => {
	if (target.matches('.amount__add, .amount__remove')) {
		const input = target.closest('.amount').querySelector("input[type='number']");
		let value = +input.value || 0;
		input.value = target.classList.contains('amount__add') ? value + 1 : Math.max(value - 1, 1);
	}
});

document.querySelectorAll(".main-tabs__btn, .main-info__btn").forEach(button => {
	button.addEventListener("click", () => {
		document.querySelectorAll(".main-tabs__btn, .main-information").forEach(el => el.classList.remove("active"));

		if (button.classList.contains("main-info__btn")) {
			const parentInfo = button.closest(".main-information");
			parentInfo.classList.add("active");
			const relatedTab = document.querySelector(`.main-tabs__btn[data-tab="${parentInfo.dataset.tab}"]`);
			if (relatedTab) relatedTab.classList.add("active");
		} else {
			document.querySelector(`.main-information[data-tab="${button.dataset.tab}"]`).classList.add("active");
			button.classList.add("active");
		}
	});
});