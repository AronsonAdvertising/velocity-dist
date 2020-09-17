var waitForJQuery = setInterval(function () {
	if (typeof $ != 'undefined') {

		$(".exterior").click(function () {
			$("#vehicleImage").attr({ src: $(this).attr("data-src"), alt: $(this).attr("data-alt") });
			$(".exterior").removeClass("active");
			$(this).addClass("active");
		});

		clearInterval(waitForJQuery);
	}
}, 10);