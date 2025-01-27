document.addEventListener('DOMContentLoaded', () => {
	const filterBtn = document.querySelector('.page__filter-btn')
	if(filterBtn) {
		filterBtn.addEventListener('click', () => {
			const page = filterBtn.closest('.page')
			if(page.classList.contains('page--filter-show')) {
				page.classList.remove('page--filter-show')
				document.body.style.overflow = ''
			}
			else {
				page.classList.add('page--filter-show')
				document.body.style.overflow = 'hidden'
			}
		})
	}

	const filterApplyBtn = document.querySelector('.filter__apply-btn')
	if(filterApplyBtn) {
		filterApplyBtn.addEventListener('click', () => {
			const page = filterApplyBtn.closest('.page')
			page.classList.remove('page--filter-show')
			document.body.style.overflow = ''
		})
	}

	// Filter group
	const groupList = document.querySelectorAll('.filter__group')
	if(groupList.length) {
		groupList.forEach((group) => {
			const toggleBtn = group.querySelector('.filter__group-top')
			toggleBtn.addEventListener('click', () => {
				group.classList.toggle('filter__group--expanded')
			})
		})
	}

	// Range sliders
	const rangeList = document.querySelectorAll('.range-slider')
	if(rangeList.length) {
		rangeList.forEach((slider) => {
			const input = slider.querySelector('.range-slider__input')
			const from = slider.querySelector('.range-slider__label-from')
			const to = slider.querySelector('.range-slider__label-to')
			ionRangeSlider(input, {
				type: 'double',
				hide_min_max: true,
				hide_from_to: true,
				prettify_enabled: true,
			});

			input.addEventListener('change', (e) => {
				const valueArr = e.target.value.split(';')
				from.innerHTML = parseInt(valueArr[0]).toLocaleString('ru-RU')
				to.innerHTML = parseInt(valueArr[1]).toLocaleString('ru-RU')
			})
		})
	}
})
