//console.log()
const tabsMain = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
//const line = document.querySelectorAll('[data-tab]');


tabsMain.forEach(function (item) {
	item.addEventListener('click', function () {

		contentBoxes.forEach(function (item) {
			item.classList.add('hiden')
		});



		const contentBox = document.querySelector('#' + this.dataset.tab);
		contentBox.classList.remove('hiden');




	})
})


