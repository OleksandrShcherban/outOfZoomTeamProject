//console.log()
const tabsMain = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]')



tabsMain.forEach(function (item) {
	item.addEventListener('click', function () {

		contentBoxes.forEach(function (item) {
			item.classList.add('hiden')
		});
		const contentBox = document.querySelector('#' + this.dataset.tab);
		contentBox.classList.remove('hiden');

	})
})

