function lentaButtons() {
	var rgba1 = "rgba(51, 160, 255, 1)";
	var rgba05 = "rgba(51, 160, 255, 0.5)";
	var rgba0 = "rgba(51, 160, 255, 0)";
	
	$("#minus").on("click", decrease);
	$("#plus").on("click", increase);
	$("#addToCartButton").on("click", increase);
	
	$("#countButton a").on("mouseenter", bEnter);
	$("#countButton a").on("mouseleave",function () {
		$(this).css("cursor", "pointer");
		$(this).css("background-color", rgba0);
	});
	$("#addToCartButton").hover(bEnter, bLeave);
	$("#heartButton").hover(bEnter, bLeave);

	function bEnter() {
		$(this).css("cursor", "pointer");
		$(this).css("background-color", rgba1);
	}

	function bLeave() {
		$(this).css("cursor", "auto");
		$(this).css("background-color", rgba05);
	}

	function increase() {
		var n = parseInt($("#cnt").text());
		$("#cnt").text(++n);
	}

	function decrease() {
		var n = parseInt($("#cnt").text());
		if (n > 0) {
			n--;
			$("#cnt").text(n);
		}
	}
}
