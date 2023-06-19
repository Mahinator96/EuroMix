// Спрятать все активные табы и списки
const hideTabList = (tab, tabs, lists, tabActive, listActive) => {
	if (!tab.classList.contains(tabActive)) {
		tabs.forEach(item => {
			item.classList.remove(tabActive);
		})
		lists.forEach(item => {
			item.classList.remove(listActive);
		})
	}
}

// Добавить табу и классу активные классы
const showTabList = function(e, tab, tabData, tabActive, listActive) {
	if ( e.target.classList.contains('catalog__tab-text') || e.target.classList.contains('catalog__tab')) {

		if (!tab.classList.contains(tabActive)) {
			tab.classList.add(tabActive);
			
			if (tabData) {
				const listId = document.querySelector(`#${tabData}`);
			
				listId.classList.add(listActive);
			}
		}
	}
}

catalogTabs.forEach(tab => {
	const tabData = tab.dataset.catalog;

	tab.addEventListener('click', function(e) {

		hideTabList(tab, catalogTabs, catalogLists, 'catalog__tab--active', 'catalog__list--active');

		showTabList(e, tab, tabData, 'catalog__tab--active', 'catalog__list--active');
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

    if (eventWidth <= 1920 && eventWidth > 640) hideCards(catalogFactoryItems, 4);
    if (eventWidth <= 640 && eventWidth > 320) hideCards(catalogFactoryItems, 2);
})

