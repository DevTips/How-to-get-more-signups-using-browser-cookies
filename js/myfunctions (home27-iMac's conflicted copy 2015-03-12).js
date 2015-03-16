$(function() {

	// visit home

	if ($('body').hasClass('home') && !$.cookie('seen')) {
		$.cookie('seen','step1', { expires: 120, path: '/' });
		console.log($.cookie('seen'));
	}


	// visit inner page(s)

	if ($.cookie('seen') === "step1" && !$('body').hasClass('home'))  {
		$.cookie('seen', 'step2',  { expires: 120, path: '/' });
		console.log($.cookie('seen'));
	}


	// visit home again > modal

	if($.cookie('seen') === "step2" && $('body').hasClass('home')) {
		$('.signup-modal').addClass('is-open');
		console.log($.cookie('seen'));
	}

	// closing the modal

	$('.signup-modal .close').click(function() {
		$('.signup-modal').removeClass('is-open');
		$.cookie('seen', 'complete',  { expires: 120, path: '/' });
		console.log($.cookie('seen'));
	});


});
