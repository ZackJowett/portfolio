$(document).ready(() => {
	// Reset scroll
	window.scrollTo(0, 0);

	// Elements
	$window = $(window);
	$header = $("header");
	$vertTransition = $(".vertTransition");
	$sideBounce = $(".sideBounceOnTransition");

	// Constants
	const windowHeight = $(window).height();
	const windowWidth = $(window).width();
	const sectionTriggerPadding = 500; // (px)
	const sideBounceLength = 25; // (px) how far to move side bounce elements
	const sideBounceMaxScale = 0.8; // multiplier on how much to scale bounce elements

	// Update heading on scroll
	$window.scroll((e) => {
		handleHeadingMovement();
	});

	// Update heading on window resize
	$(window).resize(() => {
		handleHeadingMovement();
	});

	function handleHeadingMovement() {
		// Ratio of scrolling 1 window height
		const windowHeightRatio = $window.scrollTop() / $window.height();

		// Position calculations
		const headerTop = windowHeightRatio * ($window.height() / 2);

		// Adjust heading size until fits at top
		$header.css(
			"top",
			Math.max(
				windowHeight / 2 - (windowHeightRatio * windowHeight) / 2,
				$header.outerHeight() / 2
			)
		);

		handleScrollSection();
	}

	// Assigns the "current-section" class to html section element that the
	// user is up to scrolling
	function handleScrollSection() {
		$content = $(".content");
		console.log($content);

		$content.each((index, element) => {
			// Boundaries
			let sectionTop = $(element).position().top - $header.outerHeight();
			let sectionBottom =
				$(element).position().top +
				$(element).outerHeight() -
				$header.outerHeight();

			// Check if in section
			let inSection =
				$window.scrollTop() > sectionTop &&
				$window.scrollTop() < sectionBottom;

			// Check if scroll position is within the leadup area before a
			// section begin - used as a ratio to move index scroller
			let inLeadup =
				$window.scrollTop() > sectionTop - sectionTriggerPadding &&
				$window.scrollTop() <= sectionTop;

			// Add/Remove "current-section" class to element if in that section
			if (inLeadup) {
				// calculate ratio from top of leadup to top of section (0-1)
				let leadupRatio =
					($window.scrollTop() -
						($(element).position().top -
							$header.outerHeight() -
							sectionTriggerPadding)) /
					sectionTriggerPadding;

				animatePeriod(leadupRatio, index);
				animateSideBounce(leadupRatio, index);
			} else if (inSection) {
				// scroll is not in transition phase - lock to position
				$vertTransition.css(
					"top",
					(index + 1) * $vertTransition.height()
				);
				$sideBounce.css("left", 0);
				$sideBounce.css("transform", "scale(1)");

				// set section font
				console.log($(`.index-scroller`).children(index));
				$(`.index-scroller`)
					.children(index + 1)
					.css("font-weight", "bold");
			}
		});

		// Default when outside content sections
		if (
			$window.scrollTop() <
			$content.position().top -
				$header.outerHeight() -
				sectionTriggerPadding
		) {
			$vertTransition.css("top", 0);
			$sideBounce.css("left", 0);
			$sideBounce.css("transform", "scale(1)");
			// $(`.index-scroller`).children(0).css("font-weight", "bold");
		}
	}

	// Handles movement of the '.' in the index scrolling title
	function animatePeriod(ratio, currSectionNum) {
		$vertTransition.css(
			"top",
			(Math.ceil((ratio * $header.height()) / 10) * 10) / 4 +
				currSectionNum * $vertTransition.height()
		);
	}

	// Handles brand title horizontal transition between sections
	function animateSideBounce(ratio, currSectionNum) {
		$sideBounce.css("left", -Math.sin(ratio * Math.PI) * sideBounceLength);
	}
});
