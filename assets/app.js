'use strict';

$(document).ready(function() {
	$.getJSON('http://yesno.wtf/api', function(e) {
		if (e) {
			$("#answer").text(e.answer);
			var t = new Image;
			$(t).on("load",function(){
				$("#app").addClass("show");
				return $("#background")
					.css("background-image","url("+e.image+")")
			});
			t.src=e.image;
			
		}
	});

	function setHeight() {
		var windowHeight = $(window).innerHeight();
		$('#app').css('min-height', windowHeight);
	};
	setHeight();

	$(window).resize(function() {
		setHeight();
	});
});