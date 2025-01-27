document.addEventListener('DOMContentLoaded', () => {
	// Menu
	const header = document.querySelector('.header')
	const menuBtnList = header.querySelectorAll('*[data-menu]')
	if(menuBtnList.length) {
		menuBtnList.forEach((menuBtn) => {
			menuBtn.addEventListener('click', (e) => {
				e.preventDefault()
				const menu = document.querySelector(`#${menuBtn.dataset.menu}`)
				if(menuBtn.classList.contains('active')){
					menuBtn.classList.remove('active')
					menu.classList.remove('menu--active')
					document.body.style.overflow = ''
				}
				else {
					const currentActiveMenuBtn = header.querySelector('.active')
					const currentActiveMenu = header.querySelector('.menu--active')
					if(currentActiveMenuBtn) {
						currentActiveMenuBtn.classList.remove('active')
						currentActiveMenu.classList.remove('menu--active')
					}
					menuBtn.classList.add('active')
					menu.classList.add('menu--active')
					document.body.style.overflow = 'hidden'
				}
			})
		})
	}

	const navSlidersList = document.querySelectorAll('.nav-slider')
	if(navSlidersList.length) {
		navSlidersList.forEach((navSliderBox) => {
			const navSliderEl = navSliderBox.querySelector('.nav-slider__el')
			const navSlider = new Swiper(navSliderEl, {
				slidesPerView: parseInt(navSliderEl.dataset.cols),
				spaceBetween: 40,
				watchSlidesProgress: true,
				navigation: {
					nextEl: navSliderBox.querySelector('.nav-slider__btn--next'),
					prevEl: navSliderBox.querySelector('.nav-slider__btn--prev'),
				},
			})

			const  slaveSliderEl = document.querySelector(`#${navSliderEl.dataset.slave}`)
			const slaveSlider = new Swiper(slaveSliderEl, {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
				allowTouchMove: false,
				effect: "creative",
				creativeEffect: {
					prev: {
						opacity: 0,
						display: 'none',
					},

					next: {
						opacity: 0,
						display: 'none',
					},
				}
			})

			const navsList = navSliderEl.querySelectorAll('.nav-slider__slide')
			if(navsList.length) {
				navsList.forEach((nav) => {
					nav.addEventListener('click', () => {
						const currentNav = navSliderBox.querySelector('.nav-slider__slide--active')
						currentNav.classList.remove('nav-slider__slide--active')
						nav.classList.add('nav-slider__slide--active')
						const toSlideId = parseInt(nav.dataset.slide)
						slaveSlider.slideTo(toSlideId)
						const navVisibleList = navSliderBox.querySelectorAll('.swiper-slide-visible')
						setTimeout(()=>{
							if(nav===navVisibleList[0]) {
								navSlider.slideTo(toSlideId-1)
							}
							if(nav===navVisibleList[navVisibleList.length-1]) {
								navSlider.slideTo(toSlideId+1)
							}
						})
					})
				})
			}
		})
	}

	// Selects
	const selectList = document.querySelectorAll('select.input')
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

	// Footer menu
	const titleList = document.querySelectorAll('.footer__nav-title')
	if(titleList.length) {
		titleList.forEach((title) => {
			title.addEventListener('click', () => {
				const col = title.closest('.footer__nav-col')
				col.classList.toggle('footer__nav-col--expanded')
			})
		})
	}
})
