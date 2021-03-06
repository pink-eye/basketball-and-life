document.addEventListener('DOMContentLoaded', function() {

	// BURGER
	
	const headerBurger = document.querySelector('.header__burger');
	const headerMenu = document.querySelector('.header__menu');
	const mainLayerOne = document.querySelector('.main__layer_one');
	
	headerBurger.addEventListener('click', function () {
		if (headerBurger.classList.contains('_active')) {
			headerBurger.classList.remove('_active');
			headerMenu.classList.remove('_active');
			mainLayerOne.classList.remove('_active');
		}
		else {
			headerBurger.classList.add('_active');
			headerMenu.classList.add('_active');
			mainLayerOne.classList.add('_active');
		}
		if (mainLayerSecond.classList.contains('_active'))
			calendar.close();
	});
	
	mainLayerOne.addEventListener('click', function (e) {
		if (headerMenu.classList.contains('_active') && e.target != headerMenu && e.target != headerBurger && e.target != header) {
			headerMenu.classList.remove('_active');
			headerBurger.classList.remove('_active');
			mainLayerOne.classList.remove('_active');
		}
	});
	
	
	
	
	
	
	// SWIPER
	
	const swiperHeader = new Swiper('.swiper-header__container', {
		loop: true,
		spaceBetween: 6,
		slidesPerGroup: 3,
	
		breakpoints: {
			1180: {
				slidesPerView: 10,
			},
	
			993: {
				slidesPerView: 6,
			},
	
			650: {
				slidesPerView: 8,
			},
	
			500: {
			slidesPerView: 6,
			},
	
			380: {
				slidesPerView: 4,
			},
	
			320: {
				slidesPerView: 3,
			}
		},
	
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	
	
	// DA
	
	const da = new DynamicAdapt("max");
	da.init();
	
	
	// bgi
	
	function bgi() {
		let bgi = document.querySelectorAll(".bgi");
		for (var i = 0; i < bgi.length; i++) {
			if (bgi[i].querySelector('img')) {
				bgi[i].style.backgroundImage = 'url(' + bgi[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
	bgi();
	
	// FLATPICKR
	
	const mainLayerSecond = document.querySelector('.main__layer_second');
	const header = document.querySelector('header');
	const headerCalendar = document.querySelector('.header__calendar');
	const headerDate = document.querySelector('.header__date');
	
	const calendar = flatpickr(".flatpickr", {
		appendTo: header,
		clickOpens: false,
		monthSelectorType: "static",
		onOpen: appearBlackout,
		onClose: disappearBlackout,
		dateFormat: 'd.m.Y',
	});
	
	headerCalendar.addEventListener('click', function () {
		calendar.toggle();
	});
	
	function appearBlackout() {
		mainLayerSecond.classList.add('_active');
		headerDate.classList.add('_active');
	}
	
	function disappearBlackout() {
		mainLayerSecond.classList.remove('_active');
		headerDate.classList.remove('_active');
	}
	
	
	// POPUP
	
	const openPPs = document.querySelectorAll('.pp');
	const popup = document.querySelector('.popup');
	const popupBody = document.querySelectorAll('.popup__body');
	const body = document.querySelector('body');
	const closePP = document.querySelector('.close-popup');
	let paddingToFixBody = (window.innerWidth - body.offsetWidth) + 'px';
	
	for (let index = 0; index < openPPs.length; index++) {
	
		const openPP = openPPs[index];
	
		openPP.addEventListener('click', function () {
			popup.classList.add('_active');
			body.style.overflow = 'hidden';
			body.style.paddingRight = paddingToFixBody;
		});
	}
	
	closePP.addEventListener('click', function () {
		popup.classList.remove('_active');
		body.style.overflow = 'visible';
		body.style.paddingRight = '0px';
	});
	
	popup.addEventListener('click', function (e) {
		if (popup.classList.contains('_active') && e.target == popup) {
			popup.classList.remove('_active');
			body.style.overflow = 'visible';
			body.style.paddingRight = '0px';
		}
	});
});	
