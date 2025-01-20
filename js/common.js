document.addEventListener('DOMContentLoaded', () => {
	// Menu
	const header = document.querySelector('.header')
	const menuBtn = document.querySelector('.header__menu-btn')
	menuBtn.addEventListener('click', () => {
		if(header.classList.contains('header--menu-shown')){
			header.classList.remove('header--menu-shown')
			document.body.style.overflow = ''
		}
		else {
			header.classList.add('header--menu-shown')
			document.body.style.overflow = 'hidden'
		}
	})

	const menuSliderEl = document.querySelector('.header__menu-slider')
	new Swiper(menuSliderEl, {
		slidesPerView:6,
		spaceBetween: 40,
	})

	const navList = menuSliderEl.querySelectorAll('.header__menu-top-el')
	if(navList.length) {
		navList.forEach((nav) => {
			nav.addEventListener('click', () => {
				if(!nav.classList.contains('header__menu-top-el--active')) {
					const currentNav = menuSliderEl.querySelector('.header__menu-top-el--active')
					currentNav.classList.remove('header__menu-top-el--active')
					nav.classList.add('header__menu-top-el--active')

					const currentContent = header.querySelector('.header__menu-content-box--active')
					currentContent.classList.remove('header__menu-content-box--active')
					const content = header.querySelector(`#${nav.dataset.group}`)
					content.classList.add('header__menu-content-box--active')
				}
			})
		})
	}
})
