catalogTabs.forEach(tab => {


	tab.addEventListener('click', function(e) {

		if (!tab.classList.contains('catalog__tab--active')) {
			catalogTabs.forEach(item => {
				item.classList.remove('catalog__tab--active');
			})
		}

		if ( e.target.classList.contains('catalog__tab-text') || e.target.classList.contains('catalog__tab')) {

			if (!tab.classList.contains('catalog__tab--active')) {
				tab.classList.add('catalog__tab--active');
			}
		}
	})
})

// Скрывает лишние карточки
const hideCards = (cards, maxCardsMath) => {
	cards.forEach((item, index) => { 	// Перебрать все карточки
		item.classList.add('hidden'); 	// Скрыть все карточки

		if (index <= maxCardsMath) { 				// Если карточек меньше чем указано в параметре
			item.classList.remove('hidden');
			console.log('hi');
		}
	})
}

// При изменении ширины (динамика) происходит расчёт карточек и показ(скрытие) кнопки
window.addEventListener('resize', event => {
	let eventWidth = event.target.window.innerWidth

    if (eventWidth <= 640 && eventWidth > 320) hideCards(catalogFactoryItems, 2);
})

