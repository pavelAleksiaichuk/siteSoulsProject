"use strict";

// fixed Header
if (document.querySelector('.header')) {
	const headerElement = document.querySelector('.header');
	const notOfficialSite = document.querySelector('.wrapper__notoff');
	
	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
			notOfficialSite.classList.remove('wrapper__notoff--hidden');
		} else {
			headerElement.classList.add('_scroll');
			notOfficialSite.classList.add('wrapper__notoff--hidden');
		}
	};
	
	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
}
// ===========================================================================


// Header Menu Burger

const menuIcon = document.querySelector('.menu-icon');
const menuNav = document.querySelector('.menu');

if (menuIcon) {
	menuIcon.addEventListener("click", function () {
		document.body.classList.toggle('lock');
		menuIcon.classList.toggle('menu-icon--active');
		menuNav.classList.toggle('menu--active');
	});
}
// =======================================================================================

//Scroll To Page
const menuLinks = document.querySelectorAll('.menu__list-link[data-goto]');
if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - 80;

			if(menuNav.classList.contains('menu--active')) {
				document.body.classList.remove('lock');
				menuIcon.classList.remove('menu-icon--active');
				menuNav.classList.remove('menu--active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		}
	}
}
// ============================================================================================

// Slider Top ====================================================

// if(document.querySelector('.slider__container')) {

// 	const headerSlider = new Swiper('.slider__container', {
// 		slidesPerView: 1,
// 		loop: true,
// 		autoplay: true,
// 		speed: 1500,
// 	});
// }
// ================================================================

// Slider Food ====================================================

// if(document.querySelector('.slider-food')) {

// 	const foodSlider = new Swiper('.slider-food', {
// 		loop: true,
// 		autoplay: true,
// 		speed: 1500,
// 		pagination: {
// 			el: '.slider-food__pagination',
// 			type: 'fraction',
// 		},
// 		breakpoints: {
// 			320: {
// 				slidesPerView: 1,
// 				spaceBetween: 0,
// 			},
// 			375: {
// 				slidesPerView: 2,
// 				spaceBetween: 15,
// 			},
// 			560: {
// 				slidesPerView: 1,
// 				spaceBetween: 0,
// 			},
// 			820: {
// 				slidesPerView: 2,
// 				spaceBetween: 15,
// 			},
// 			922: {
// 				slidesPerView: 2,
// 				spaceBetween: 30,
// 			}
// 		}
// 	});
// }
// ================================================================


// JQuery

// $(function () {

	// const mixer = mixitup('.works__items');

	// Tabs

	// $('.tabs__link').on('click', function (e) {
	// 	e.preventDefault();

	// 	$('.menu-icon').removeClass('menu-icon--active');
	// 	$('.menu').removeClass('menu--active');
	// 	$("body").removeClass('lock');
	// 	$('.tabs__link').removeClass('tabs__link--active');
	// 	$('.page-section').removeClass('page-section--active');
	// 	$(this).addClass('tabs__link--active');
	// 	$($(this).attr("href")).addClass('page-section--active');
	// });

	// $('.work__gallery-container').magnificPopup({
	// 	delegate: "a",
	// 	type:'image',
	// 	gallery: {
	// 		enabled: true,
	// 	}
	// });

	// const subMenu = $('.submenu');

	// if (subMenu) {
	// 	const subMenuBtn = $('.submenu-btn');
	// 	const menuSubmenu = $('.menu__submenu');

	// 	subMenuBtn.on('click', function () {
	// 		subMenuBtn.toggleClass('submenu-btn--active');
	// 		menuSubmenu.toggleClass('menu__submenu--white');
	// 		subMenu.fadeToggle();
	// 	})

	// 	$(document).on('click', function (e) {
	// 		if (!subMenu.is(e.target) && subMenu.has(e.target).length === 0 && !subMenuBtn.is(e.target) && subMenuBtn.has(e.target).length === 0)
	// 		{
	// 			subMenuBtn.removeClass('submenu-btn--active');
	// 			menuSubmenu.removeClass('menu__submenu--white');
	// 			subMenu.fadeOut();
	// 		}
	// 	});
	// }
// });

// =======================================================================================



// Tabs Blogs

if (document.querySelector('.blogs-nav')) {
	const blogsNavItems = document.querySelectorAll('.blogs-nav__item');
	const blogsContent = document.querySelectorAll('.blogs__content-item');

	blogsNavItems.forEach(
		(item) => item.addEventListener('click', function(e) {
			e.preventDefault();
			const id = e.target.getAttribute('href').replace('#', '');

			blogsNavItems.forEach(
				(child) => child.classList.remove('blogs-nav__item--active')
			)

			blogsContent.forEach(
				(child) => child.classList.remove('blogs__content-item--active')
			)

			item.classList.add('blogs-nav__item--active');
			document.getElementById(id).classList.add('blogs__content-item--active');
		})
	);

	document.querySelector('.blogs-nav__item').click();
}
"use strict"


// Video Player ====================================================================

if(document.querySelector('.video-player')) {
	const videoPlayer = document.querySelector('.video-player'),
				video = document.querySelector('._video'),
				playVideoBtn = document.querySelector('._play-video'),
				progressVideo = document.querySelector('._video-progress'),
				videoCurrentTime = document.querySelector('._video-current-time'),
				videoDurationTime = document.querySelector('._video-duration-time'),
				videoVolumeBtn = document.querySelector('._volume-btn'),
				videoVolumeImg = document.querySelector('._volume-img'),
				videoVolumeInput = document.querySelector('._volume-input'),
				videoFullscreenBtn = document.querySelector('._fullscreen-video');

	// Play & Pause
	function toogleVideoStatus() {
		if (video.paused) {
			playVideoBtn.classList.add('video-controls__play-item');
			playVideoBtn.classList.remove('video-controls__pause-item');
			video.play();
		} else {
			playVideoBtn.classList.remove('video-controls__play-item');
			playVideoBtn.classList.add('video-controls__pause-item');
			video.pause();
		}
	}
	playVideoBtn.addEventListener('click', toogleVideoStatus);
	video.addEventListener('click', toogleVideoStatus);

	// Video Progress
	function updateVideoProgress() {
		progressVideo.value = (video.currentTime / video.duration) * 100;
		let currentTimeVideo = Number(video.currentTime);

		// Minutes
		let minutes = Math.floor(currentTimeVideo / 60) < 10 ? '0' + Math.floor(currentTimeVideo / 60) : Math.floor(currentTimeVideo / 60);

		// Seconds
		let seconds = Math.floor(currentTimeVideo % 60) < 10 ? '0' + Math.floor(currentTimeVideo % 60) : Math.floor(currentTimeVideo % 60);

		videoCurrentTime.innerHTML = `${minutes}:${seconds}`;
	}
	video.addEventListener('timeupdate', updateVideoProgress);

	// Set Proggress Video
	function setProgressVideo() {
		video.currentTime = (progressVideo.value * video.duration) / 100;
	}
	progressVideo.addEventListener('change', setProgressVideo);

	// Duration Video
	function videoDuration() {
		let durationTime = Number(video.duration);

		// Minutes
		let minutes = Math.floor(durationTime / 60) < 10 ? '0' + Math.floor(durationTime / 60) : '0' + Math.floor(durationTime / 60);

		// Seconds
		let seconds = Math.floor(durationTime % 60) < 10 ? '0' + Math.floor(durationTime % 60) : '0' + Math.floor(durationTime % 60);

		videoDurationTime.innerHTML = `${minutes}:${seconds}`;
	}
	video.addEventListener('loadeddata', videoDuration);

	// Volume
	function setVideoVolume(e) {
		video.volume = e.target.value / 100;
	}
	videoVolumeInput.addEventListener('input', setVideoVolume);

	videoVolumeBtn.addEventListener('click', () => {
		videoVolumeImg.classList.toggle('video-controls__volume-img--muted');
		video.volume = Number(video.volume == 0);
		if(Number(videoVolumeInput.value == 0)) {
			Number(videoVolumeInput.value = 100);
		} else {
			Number(videoVolumeInput.value = 0);
		}
	});
	function updateVideoVolume() {
		video.volume = 1;
	}
	video.addEventListener('loadeddata', updateVideoVolume);

	// Muted
	videoVolumeInput.addEventListener('input', () => {
		if(video.volume == 0) {
			videoVolumeImg.classList.add('video-controls__volume-img--muted');
		} else {
			videoVolumeImg.classList.remove('video-controls__volume-img--muted');
		}
	})

	// Fullscreen
	function toggleFullScreen() {
		if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoPlayer.requestFullscreen();
    }
	}
	videoPlayer.addEventListener('dblclick', toggleFullScreen);
	videoPlayer.addEventListener('fullscreenchange', checkFullscreen);
	videoFullscreenBtn.addEventListener('click', toggleFullScreen);

	function checkFullscreen() {
		const isFullscreen = Boolean(document.fullscreenElement);
		videoPlayer.classList.toggle('video-player--fullscreen', isFullscreen);
	}

	// Play & Pause on Space / Arrows Left / Right
	function initVideoListeners() {
		document.addEventListener('keydown', function (e) {
			if(e.code === 'Space') {
				e.preventDefault();
				toogleVideoStatus();
			} else if (e.code === 'ArrowRight') {
				video.currentTime += 5;
			} else if (e.code === 'ArrowLeft') {
				video.currentTime -= 5;
			}
		});
	}
	initVideoListeners();

	// Show Settings
	const videoSettingsBtn = document.querySelector('.video-controls__settings-btn');
	const videoSettingsMenu = document.querySelector('.video-controls__settings-menu');

	if(videoSettingsBtn) {
		videoSettingsBtn.addEventListener('click', function () {
			videoSettingsMenu.classList.toggle('video-controls__settings-menu--hidden');
		})
	}
	
}

// ===================================================================================
// _anim-items - add for animate
// _anim-hide - add for animate once

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for(let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
					scrollLeft = window.scrollX || document.documentElement.scrollLeft,
					scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 500);
}
"use strict"

// Contacts Form

if (document.querySelector('.form-contacts')) {
	document.addEventListener('DOMContentLoaded', function () {
		const form = document.getElementById('form');
		form.addEventListener('submit', formSend);

		async function formSend(e) {
			e.preventDefault();

			let error = formValidate(form);

			let formData = new FormData(form);

			if (error === 0) {
				form.classList.add('_sending');
				// let response = await fetch('sendmail.php', {
				// 	method: 'POST',
				// 	body: formData
				// });
				// if(response.ok) {
				// 	let result = await response.json();
				// 	alert(result.message);
				// 	form.reset();
				// 	form.classList.remove('_sending');
				// } else {
				// 	alert('Error');
				// 	form.classList.remove('_sending');
				// }
			} else {
				alert("Fill in the fields");
			}
		}

		function formValidate(form) {
			let error = 0;
			let formReq = document.querySelectorAll('._req');

			for (let index = 0; index < formReq.length; index++) {
				const input = formReq[index];
				formRemoveError(input);

				if (input.classList.contains('_email')) {
					if (emailTest(input)) {
						formAddError(input);
						error++;
					}
				} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddError(input);
					error++;
				} else {
					if (input.value === '') {
						formAddError(input);
						error++;
					}
				}
			}
			return error;
		}

		function formAddError(input) {
			input.parentElement.classList.add('_error');
			input.classList.add('_error');
		}

		function formRemoveError(input) {
			input.parentElement.classList.remove('_error');
			input.classList.remove('_error');
		}

		// Email Test
		function emailTest(input) {
			return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
		}
	});
}