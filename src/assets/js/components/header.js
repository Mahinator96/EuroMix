burger.addEventListener('click', function(e) {
	e.target.classList.toggle('burger--active');
	body.classList.toggle('_lock');
	headerNav.classList.toggle('header__nav--open');
})

headerNavItems.forEach(item => {
	if (!item.querySelector('.header__nav-sublist')) {
		item.querySelector('.header__nav-arrow').style.display = 'none';
	}
})

userEnter.addEventListener('click', function() {
	modalEntry.classList.add('modal--open');
	body.classList.add('_lock');
})