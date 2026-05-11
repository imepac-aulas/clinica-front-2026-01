$(function () {
	$('.js-select-all').on('change', function () {
		var $panel = $(this).closest('.permission-panel');
		$panel.find('.js-permission-item').prop('checked', $(this).is(':checked'));
	});
});
