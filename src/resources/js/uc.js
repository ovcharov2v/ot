document.addEventListener('DOMContentLoaded', () => {
	// Filter
	const filterBoxList = document.querySelectorAll('.uc__filter')
	if(filterBoxList.length) {
		filterBoxList.forEach((filterBox) => {
			const btn = filterBox.querySelector('.uc__filter-btn')
			if(btn) {
				const defaultText = btn.innerText
				btn.addEventListener('click', () => {
					if(filterBox.classList.contains('uc__filter--expanded')) {
						filterBox.classList.remove('uc__filter--expanded')
						btn.innerText = defaultText
					}
					else {
						filterBox.classList.add('uc__filter--expanded')
						btn.innerText = 'Скрыть'
					}

					// ------- Костыль для обновления высота слайда
					const slider = filterBox.closest('.swiper')
					if(slider) {
						slider.style.width = `${slider.offsetWidth-.1}px`
						setTimeout(() => {
							slider.style.width = ''
						}, 10)
					}
					// -------
				})
			}
		})
	}
})
