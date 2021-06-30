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
	navbarMenu.classList.remove('open');
	scrollIntoView(link)
});

// Navbar toggle
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
	navbarMenu.classList.toggle('open');
})


// 홈의'contact me' 클릭시 contact 메뉴로 이동
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
	scrollIntoView('#contact');
});


// 스크롤시 home의 배경 투명도 조절
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	home.style.opacity = 1 - window.scrollY / homeHeight
})


// 'arrow-up' 클릭시 맨 위로
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
	if (window.scrollY > homeHeight / 2) {
		arrowUp.classList.add('visible');
	} else {
		arrowUp.classList.remove('visible');
	}
});

arrowUp.addEventListener('click', () => {
	scrollIntoView('#home');
})

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
	const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
	if (filter == null) {
		return;
	}

	// 선택된 아이템에 active 부여
	const active = document.querySelector('.category__btn.selected');
	active.classList.remove('selected');
	const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
	target.classList.add('selected');


	projectContainer.classList.add('ani-out');
	setTimeout(() => {
		projects.forEach((project) => {
			if (filter === '*' || filter === project.dataset.type) {
				project.classList.remove('invisible')
			} else {
				project.classList.add('invisible');
			}
		});
		projectContainer.classList.remove('ani-out');
	}, 300);
});


function scrollIntoView(selector) {
	const scrollTo = document.querySelector(selector);
	scrollTo.scrollIntoView({behavior: 'smooth'});
}


