document.addEventListener('DOMContentLoaded', () => {
	// Filter
	const filterBoxList = document.querySelectorAll('.uc__filter')
	if(filterBoxList.length) {
		filterBoxList.forEach((filterBox) => {
			const btn = filterBox.querySelector('.uc__filter-btn')
			if(btn) {
				btn.addEventListener('click', () => {
					filterBox.classList.toggle('uc__filter--expanded')
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
