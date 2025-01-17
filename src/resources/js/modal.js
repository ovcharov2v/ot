document.addEventListener('DOMContentLoaded', () => {
	// Open modal window
	const modalLinks = document.querySelectorAll('[data-modal]')
	modalLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			showModal(link.dataset.modal)
			return false
		})
	})

// Show modal window
	function showModal(modalName) {
		const modal = document.querySelector(`#${modalName}`)
		if (!modal) {
			console.log(`Modal #${modalName} does not exist!`)
			return
		}

		if (document.querySelector('.modal--shown')) {
			closeModal()
		}

		document.body.style.overflow = 'hidden'
		modal.classList.add('modal--show')

		setTimeout(() => {
			modal.classList.add('modal--backdrop')
		}, 50)

		setTimeout(() => {
			modal.classList.add('modal--shown')
		},300)
	}

// Close modal window
	function closeModal() {
		const modal = document.querySelector('.modal--shown')
		modal.classList.remove('modal--shown')

		setTimeout(() => {
			modal.classList.remove('modal--backdrop')
		},150)

		setTimeout(() => {
			modal.classList.remove('modal--show')
		},350)
		document.body.style.overflow = ''
	}

	const closeButtons = document.querySelectorAll('.js-modal-close')
	closeButtons.forEach((button) => {
		button.addEventListener('click', closeModal)
	})

// Close on backdrop click
	const modalList = document.querySelectorAll('.modal')
	if (modalList) {
		modalList.forEach((modal) => {
			modal.addEventListener('click', (e) => {
				if (e.target.classList.contains('modal')) {
					closeModal()
				}
			})
		})
	}

	// Copy promo code
	const promoForm = document.querySelector('.modal__promo-form')
	if(promoForm) {
		const code = promoForm.querySelector('.modal__promo-input').value
		const btn = promoForm.querySelector('.modal__promo-btn')
		btn.addEventListener('click', () => {
			navigator.clipboard.writeText(code)
		})
	}

})
