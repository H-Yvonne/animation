
var init = function () {
	mouseClick();
};

var mouseClick = function () {
	$('div.intro-container').on('click', 'a.js-people-btn', function () {
		var id = $(this).attr('data-attr');
		$('div.intro-main').hide();
		$('div.intro-intro-wrap').show();
		$('div.intro-intro-people'+id).show();
	}).on('click', 'div.intro-intro-wrap', function () {
		$('div.js-people-intro').hide();
		$('div.intro-intro-wrap').hide();
		$('div.intro-main').show();
	}).on('click', 'a.intro-contact-btn', function () {
		console.log('联系我们');
	});
};

$(init);