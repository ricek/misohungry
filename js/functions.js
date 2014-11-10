var loop = {};
var rand = parseInt(Math.random()*3);
var s;

$.ajax({
	beforeSend: function(xhr) {
		if (xhr.overrideMimeType) {
			xhr.overrideMimeType("application/json");
		}
	}
});

function loadFDD(type) {
	var newContent = '';
	s = type;
	console.log(type[rand].name);
	newContent += '<h3>' + type[rand].name + '</h3>';
	newContent += '<p>' + type[rand].overview + '</p>';
	$('#side').html(newContent);
}

function loadRecipe(type) {
	var newContent = '';
	for (var i = 0; i < type[rand].steps.length; i++) {
		newContent += '<li id=\"step' + (i+1) + '"><a href="#">Step ' + (i+1) + '</a></li>';
		loop['step' + (i+1)] = type[rand].steps[i];	
	}
	$('#steps').html('<ul>' + newContent + '</ul>');
	console.log("Recipe loaded!");

	$('li').on('click', function(e) {	
		e.preventDefault();
		var id = $(this).attr('id');
		console.log(loop[id]);
		$('#details').html(loop[id]);
	});
}

// Category list

$('#overview').on('click', function(e) {
	clear(e);
	$('#category a.current').removeClass('current');
	$(this).addClass('current');
	loadFDD(s);
});

$('#recipe').on('click', function(e) {
	clear(e);
	$('#category a.current').removeClass('current');
	$(this).addClass('current');
	loadRecipe(s);
});

$('#reviews').on('click', function(e) {
	clear(e);
	$('#category a.current').removeClass('current');
	$(this).addClass('current');
	$('#side').html("<h3>Coming Soon</h3>");
});

// Reset divs and prevent loading

function clear(e){
	e.preventDefault();
	$('#side').html('');
	$('#steps').html('');
	$('#details').html('');
}

// Header icon animation

$('.playIcon').hover(function() {
	$('.playIcon').not($(this)).stop().animate({
		opacity: 0.3
	}, 500);
}, function() {
	$('.playIcon').stop().animate({
		opacity: 1
	});
}, 250);