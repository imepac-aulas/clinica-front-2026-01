$(function () {
	$('.js-logout-btn').on('click', function (event) {
		event.preventDefault();
		window.location.href = '../index.html';
	});
});
