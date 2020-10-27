jQuery(document).ready(function ($) {
	if ($('.header').length) {
		/** MENU IN MOBILE */
		$('.header__list  .dropdown').each(function () {
			const dropdown = $(this);
			const arrows = $('<i></i>');
			arrows.addClass('fa fa-angle-down');

			dropdown.find('a').eq(0).append(arrows);
			const subMenu = dropdown.children('.sub-menu');

			arrows.on('click', function (e) {
				e.preventDefault();
				dropdown.toggleClass('--show');
				$(this).parent().next('ul').stop().slideToggle();
			});
		});
		/** MENU IN MOBILE - END */
	}

	/** SCROLL TO TOP */
	if ($('.scroll-top').length) {
		$('.scroll-top').on('click', function (e) {
			e.preventDefault();
			$('html, body').animate(
				{
					scrollTop: 0,
				},
				500
			);
			return false;
		});

		$(window).on('scroll', function () {
			if ($(this).scrollTop() >= 10) {
				$('.scroll-top').addClass('--show');
			} else {
				$('.scroll-top').removeClass('--show');
			}
		});
	}
	/** SCROLL TO TOP - END*/

	/** MAGNIFICPOPUP */
	if ($('div[class="popup"]')) {
		$('.close-btn').on('click', function () {
			$.magnificPopup.close();
		});
		$('.open-popup-btn').magnificPopup({
			type: 'inline',
			preloader: false,
			modal: true,
			midClick: true,
			removalDelay: 500,
			callbacks: {
				beforeOpen: function () {
					this.st.mainClass = 'mfp-zoom-in';
				},
			},
		});
	}
	/** MAGNIFICPOPUP - END*/
	/** SWIPER */
	var mySwiper = undefined;
	function initSwiper() {
		var screenWidth = $(window).width();
		if (screenWidth < 500 && mySwiper !== undefined) {
			mySwiper.destroy();
			mySwiper = undefined;
			$('.swiper-wrapper').removeAttr('style');
			$('.swiper-slide').removeAttr('style');
		} else if (screenWidth >= 500 && mySwiper === undefined) {
			$('.is-slider').each(function () {
				const $swiper = $(this).find('.swiper-container');
				const nextBtn = $(this).find('.swiper-button-next');
				const prevBtn = $(this).find('.swiper-button-prev');
				const pagination = $(this).find('.swiper-pagination');
				mySwiper = new Swiper($swiper, {
					speed: 600,
					slidesPerView: 1,
					pagination: {
						el: pagination,
						clickable: true,
					},
					navigation: {
						nextEl: nextBtn,
						prevEl: prevBtn,
					},
					loop: true,
				});
			});
		}
	}
	initSwiper();
	$(window).on('resize', function () {
		initSwiper();
	});
	/** SWIPER - END*/

	/** MENU BUTTON */
	if ($('.header .hamburger-btn').length && $('.header__menu-2').length) {
		$('.header .hamburger-btn').on('click', function () {
			$('.header .hamburger-btn').toggleClass('--active');
			$('.header__menu-2').toggleClass('--active');
		});
		$(window).on('click', (e) => {
			if (
				!$('.hamburger-btn').is(e.target) &&
				!$('.bar').is(e.target) &&
				!$('.header__menu-2').is(e.target) &&
				!$('.header__menu-2').has(e.target).length
			) {
				$('.header .hamburger-btn').removeClass('--active');
				$('.header__menu-2').removeClass('--active');
			}
		});
	}
	/** MENU BUTTON - END*/
	/** TAB */
	$(window).on('click', (e) => {
		if (e.target.closest('.tab-link')) {
			const tabLink = e.target.closest('.tab-link');
			$(tabLink)
				.addClass('--active')
				.parent()
				.siblings()
				.children()
				.removeClass('--active');
		}
	});
	/** TAB - END */
	/* POPUP HISTORY DETAIL  */
	if ($('.open-history-detail').length) {
		$('.open-history-detail').on('click', function () {
			$('#popup-history-detail').toggleClass('--show');
		});
		$('.back-btn').on('click', function () {
			$('#popup-history-detail').removeClass('--show');
		});
		$('.close-btn').on('click', function () {
			$('#popup-history-detail').removeClass('--show');
		});
	}
	/* POPUP HISTORY DETAIL - END */
});
window.addEventListener('DOMContentLoaded', () => {
	if (
		document.getElementById('to-date') &&
		document.getElementById('from-date')
	) {
		const toDate = flatpickr('#to-date', {
			disableMobile: 'true',
			dateFormat: 'd/m/Y',
		});
		const fromDate = flatpickr('#from-date', {
			disableMobile: 'true',
			dateFormat: 'd/m/Y',
			onChange: function (selectedDates, dateStr, instance) {
				toDate.set('minDate', dateStr);
			},
		});
	}
});
