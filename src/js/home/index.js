var body = document.body;

var step = 0;

// doms 
var introMain = $('.intro-main');

body.addEventListener('mousewheel', function (event) {
	if (event.deltaY > 0 || step === 0) {
		// step 1
		introMain.addClass('intro-spread-main');
		step = 1;
	}
	event.preventDefault();
});

//test
setTimeout(function () {
	introMain.addClass('intro-spread-main');
}, 500)

// var init = function () {
// 	mouseClick();
// };

// var mouseClick = function () {
// 	$('div.intro-container').on('click', 'a.js-people-btn', function () {
// 		// 显示个人简介
// 		var id = $(this).attr('data-attr');
// 		$('div.intro-main').hide();
// 		$('div.intro-intro-wrap').show();
// 		$('div.intro-intro-people' + id).show();
// 	}).on('click', 'div.intro-intro-wrap', function () {
// 		// 隐藏个人简介
// 		$('div.intro-intro-people').hide();
// 		$('div.intro-intro-wrap').hide();
// 		$('div.intro-main').show();
// 	}).on('click', 'a.intro-contact-btn', function () {
// 		console.log('联系我们');
// 	}).on('click', 'a.intro-select-btn', function () {
// 		// 显示绘图
// 		var id = $(this).attr('data-attr');
// 		$('div.intro-select-wrap').hide();
// 		$('div.intro-letter-wrap').show();
// 		$('div.intro-letter-wrap' + id).show().animate({
// 			'opacity': 1
// 		}, 400);
// 	}).on('click', 'div.intro-letter-wrap', function () {
// 		// 隐藏绘图
// 		$('div.intro-letter-block').animate({
// 			'opacity': 0
// 		}, 300, function () {
// 			$('div.intro-letter-block').hide();
// 			$('div.intro-letter-wrap').hide();
// 			$('div.intro-select-wrap').show();
// 		});

// 	});
// };

// $(init);