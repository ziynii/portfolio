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

// Handle scrolling
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
	const target = event.target;
	const link = target.dataset.link;
	if (link == null) {
		return;
	}
	scrollIntoView(link)
});


// 홈의'contact me' 클릭시 contact 메뉴로 이동
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
	scrollIntoView('#contact')
});

function scrollIntoView(selector) {
	const scrollTo = document.querySelector(selector);
	scrollTo.scrollIntoView({behavior: 'smooth'});
}