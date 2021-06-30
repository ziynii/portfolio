'use strict'

// 스크롤시 navbar style 변경
const navbar = document.querySelector('#navbar');
const navbarHieght = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {

	if (window.scrollY > navbarHieght) {
		navbar.classList.add('navbar--dark');
	} else {
		navbar.classList.remove('navbar--dark');
	}
});

// Handel scrolling
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
	const target = event.target;
	const link = target.dataset.link;
	if (link == null) {
		return;
	}
	console.log(event.target.dataset.link);
	const scrollTo = document.querySelector(link);
	scrollTo.scrollIntoView({behavior: 'smooth'});
})
