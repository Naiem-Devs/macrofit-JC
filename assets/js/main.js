(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		$(".open__menu").on("click", function () {
			$(".main__menu, .overlay").addClass("active");
		});
		$(".close__menu, .overlay").on("click", function () {
			$(".main__menu, .overlay").removeClass("active");
		});




		// teatimonial__blk
		$(".slider__th umb__blk").owlCarousel({
			loop: true,
			nav: true,
			navText: [
				'<i class="far fa-angle-left"></i>',
				'<i class="far fa-angle-right"></i>',
			],
			dots: true,
			autoplay: false,
			smartSpeed: 1000,
			autoplayTimeout: 3500,
			items: 1,
			margin: 25,
			slideToScroll: 1,
			center: false,
			autoplayHoverPause: true,
		});

		//---owl dots number-----

		var i = 1;

		$(".slider__thumb__blk.owl-carousel .owl-dot").each(function () {
			$(this).text(i);
			i++;
		});

		/*magnificPopup active*/
		if (jQuery(".play__button").length > 0) {
			$(".play__button").magnificPopup({
				type: "iframe",
			});
		}

		// COUNTER UP
		if (jQuery(".counting").length > 0) {
			$(".counting").counterUp({
				delay: 10,
				time: 3000,
			});
		}

		// venobox
		if (jQuery(".venobox").length > 0) {
			$(".venobox").venobox();
		}

		// Nice select
		if (jQuery("select").length > 0) {
			$("select").niceSelect();
		}
		// ---------siblings
		$(".boxs").click(function (event) {
			$(this).toggleClass("active").siblings().removeClass("active");
		});
	});
})(jQuery);
