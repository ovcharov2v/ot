document.addEventListener('DOMContentLoaded', () => {
	// Sort selects
	const selectList = document.querySelectorAll('.sort-select')
	if(selectList.length) {
		selectList.forEach((select) => {
			new SlimSelect({
				select: select,
				settings: {
					showSearch: false,
				}
			})
		})
	}
})
