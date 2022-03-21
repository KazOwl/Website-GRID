const navMobile = document.querySelector('.nav-mobile')
const links = document.querySelectorAll('.nav__link')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	links.forEach((item) => {
		item.addEventListener('click', () => {
			navBtn.classList.remove('is-active')
			navMobile.classList.remove('nav-mobile--active')
		})
	})
}

handleCurrentYear()
navBtn.addEventListener('click', handleNav)
