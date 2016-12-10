
$(document).ready(function() {

	function addDivs() {
	for (var i = 1; i <= 256; i++) {
		$('#wrapper').append('<div class="grid" id="div'+i+'"></div>');
	}
	}
	addDivs();

	$('.grid').hover(function() {
		$(this).addClass('hover');
	});

});
