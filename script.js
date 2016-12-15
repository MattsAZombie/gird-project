
$(document).ready(function() {

	makeGrid(16*16);
	makeNewGrid();

});



function makeGrid(size) {

	for (var i = 1; i <= size; i++) {
		$('#wrapper').append('<div class="grid"></div>');
	}

	var newSize = $('#wrapper').height() / Math.sqrt(size);
	$('.grid').height(newSize);
	$('.grid').width(newSize);

	color();
}


function makeNewGrid() {
	$('button').click(function() {
    input = prompt("Pick a grid size! (e.g. enter 16 for 16x16 grid)");

    $('#wrapper').empty();
	makeGrid(Math.pow(input, 2));
	});

	color();
};

function color() {
	$('.grid').mouseenter(function() {
		$(this).addClass('hover');
	});
}