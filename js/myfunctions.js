$(function() {

	if (! $.cookie('seen') && $('body').hasClass('home')){
	  $.cookie('seen', 'step1', { expires: 120, path: '/' });
	  console.log('home origin');
	}

	if ($.cookie('seen')==="step1" && $('body').hasClass('inner-page')){
	  $.cookie('seen', 'step2', { expires: 120, path: '/' });
	  console.log('home > inner ');
	}

	if ($.cookie('seen')==="step2" && $('body').hasClass('home')){
	  $('.signup-modal').addClass('is-open');
	  console.log('home > single > home');
  }

  $('.signup-modal .close').click(function() {
	  $('.signup-modal').removeClass('is-open');
	  $.cookie('seen', 'complete', { expires: 120, path: '/' });
	});

  console.log($.cookie('seen'));

});
