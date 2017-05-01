var page = 0;
// page 1
// if (page == 1) {
var height = document.body.offsetHeight;
var width = document.body.offsetWidth;
if (width > height) {
    $('.intro-container,.page2,.page3,.page4,.page4-1').css('width', height + 'px')
} else {
    $('.intro-container,.page2,.page3,.page4,.page4-1').css('height', width + 'px')
    $('.intro-container,.page2,.page3,.page4,.page4-1').css('marginTop', (height - width) / 2 + 'px');
}

document.body.addEventListener('mousewheel', function (event) {
    // 动作1 -> 2: 首页滚动出现人物介绍
    if (event.deltaY > 0 && page === 0) {
        page = 999;
        $('.page1').addClass('active');
        setTimeout(function () {
            $('.page1-3').show();
        }, 1500);
        setTimeout(function () {
            $('.page1-3').addClass('show');
        }, 1800);
        setTimeout(function () {
            page = 1;
        }, 2200);
    }

    // 动作2 -> 1 
    if (event.deltaY < 0 && page === 1) {
        page = 999;
        $('.page1-3').removeClass('show');
        $('.page1').removeClass('active');
        setTimeout(function () {
            $('.page1-3').hide();
            page = 0;
        }, 1800);
    }

    // 动作2 -> 3：
    if (event.deltaY > 0 && page === 1) {
        page = 999;
        $('.intro-container-page3').css('display', 'block');
        setTimeout(function () {
            $('.page1-1,.page1-3').addClass('end');
            $('.intro-container-page3').removeClass('start');
            setTimeout(function () {
                page = 2;
                $('.page1-1,.page1-3').hide();
                $('.intro-container-page4').addClass('start');
            }, 1500);
        });
    }

    // 动作3 -> 2
    if (event.deltaY < 0 && page === 2) {
        page = 999;
        $('.page1-1,.page1-3').show();
        setTimeout(function () {
            $('.intro-container-page4').removeClass('start');
            $('.page1-1,.page1-3').removeClass('end');
            $('.intro-container-page3').addClass('start');
        }, 100);
        setTimeout(function () {
            page = 1;
        }, 1500);
    }

    // 动作3->4：
    if (event.deltaY > 0 && page === 2) {
        page = 999;
        $('.intro-container-page3').addClass('end');
        $('.intro-container-page4').addClass('end');
        setTimeout(function () {
            page = 3;
            $('.page1-1').show();
        }, 1500);
    }

    // 动作4->3：
    if (event.deltaY < 0 && page === 3) {
        page = 999;
        $('.page1-1').hide();
        $('.intro-container-page3').removeClass('end');
        $('.intro-container-page4').removeClass('end');
        setTimeout(function () {
            page = 2;
        }, 1500);
    }

    // 动作4->5：
    if (event.deltaY > 0 && page === 3) {
        page = 999;
        $('.page1-1').show();
        $('.intro-container-page4').removeClass('end');
        setTimeout(function () {
            $('.page1-1').removeClass('end');
            $('.page1').removeClass('active');
            page = 4;
        }, 100)
    }

    // 动作5->4：
    if (event.deltaY < 0 && page === 4) {
        page = 999;
        $('.intro-container-page3').addClass('end');
        $('.intro-container-page4').addClass('end');
        $('.page1-1').addClass('end');
        $('.page1').addClass('active');
        setTimeout(function () {
            page = 3;
            $('.page1-1').hide();
        }, 1500);
    }

});

// 简介动画
var peoplesDom = [3, 4, 5, 6];
peoplesDom.forEach(function (domId) {
    $('.page1-3 .image-' + domId).on('click', function () {
        page = 999;
        $('.page1').hide();
        $('.intro-container-page2,.intro-intro-people' + (domId - 2)).show();
        var bottom = (height - $('.intro-intro-people' + (domId - 2) + ' .intro-intro-img').height()) / 2;
        $('.intro-intro-people' + (domId - 2) + ' .intro-intro-img').css('bottom', bottom + 'px');
        var left = (width - $('.intro-intro-people' + (domId - 2) + ' .intro-intro-img').width()) / 2;
        $('.intro-intro-people' + (domId - 2) + ' .intro-intro-img').css('left', left + 'px');
    });
});

$('.intro-intro-people1,.intro-intro-people2,.intro-intro-people3,.intro-intro-people4').on('click', function () {
    page = 1;
    $('.page1').show();
    $('.intro-intro-people,.intro-container-page2').hide();
});

// 字母的点击
$('.page4 a').on('click', function () {
    var index = $('.page4 a').index(this);
    $('.page4').hide();
    $('.page4-1').show();

    $('.page4-1 .intro-letter-block').eq(index).show();
    $('.page4-1 .intro-letter-block').eq(index).css('opacity', '1');
});
$('.intro-letter-block').on('click', function () {
    $('.page4-1').hide();
    $('.page4').show();
    $('.page4-1 .intro-letter-block').hide();
});

// $('.page1-3 .image-3').on('click', function () {
//     $('.page1').hide();
//     $('.intro-container-page2,.intro-intro-people1').show();
//     var bottom = (height - $('.intro-intro-people1 .intro-intro-img').height()) / 2;
//     $('.intro-intro-people1 .intro-intro-img').css('bottom', bottom + 'px');
// });
// $('.page1-3 .image-4').on('click', function () {
//     $('.page1').hide();
//     $('.intro-container-page2,.intro-intro-people2').show();
// });
// $('.page1-3 .image-5').on('click', function () {
//     $('.page1').hide();
//     $('.intro-container-page2,.intro-intro-people3').show();
// });
// $('.page1-3 .image-6').on('click', function () {
//     $('.page1').hide();
//     $('.intro-container-page2,.intro-intro-people4').show();
// });

// $('.page1-3').hide();
// }
// page 2
// if (page == 2) {
//     $('.intro-container')[0].style.height = 'auto';
//     $('.intro-container')[0].style.marginTop = 'auto';
// }
// var body = document.body;

// var step = 0;

// // doms 
// var introMain = $('.intro-main');

// body.addEventListener('mousewheel', function (event) {
// 	if (event.deltaY > 0 && step === 0) {
// 		console.log(1)
// 		// step 1
// 		introMain.addClass('intro-spread-main');
// 		step = 1;
// 	}
// 	if (event.deltaY < 0 && step === 1) {
// 		console.log(2)
// 		// step 1
// 		introMain.removeClass('intro-spread-main');
// 		step = 0;
// 	}
// 	event.preventDefault();
// });

// //test
// setTimeout(function () {
//     $('.page1').addClass('active');
// }, 500)

// setTimeout(function () {
//     $('.page1-3').css('opacity',1)
// }, 2000)

// // var init = function () {
// // 	mouseClick();
// // };

// // var mouseClick = function () {
// // 	$('div.intro-container').on('click', 'a.js-people-btn', function () {
// // 		// 显示个人简介
// // 		var id = $(this).attr('data-attr');
// // 		$('div.intro-main').hide();
// // 		$('div.intro-intro-wrap').show();
// // 		$('div.intro-intro-people' + id).show();
// // 	}).on('click', 'div.intro-intro-wrap', function () {
// // 		// 隐藏个人简介
// // 		$('div.intro-intro-people').hide();
// // 		$('div.intro-intro-wrap').hide();
// // 		$('div.intro-main').show();
// // 	}).on('click', 'a.intro-contact-btn', function () {
// // 		console.log('联系我们');
// // 	}).on('click', 'a.intro-select-btn', function () {
// // 		// 显示绘图
// // 		var id = $(this).attr('data-attr');
// // 		$('div.intro-select-wrap').hide();
// // 		$('div.intro-letter-wrap').show();
// // 		$('div.intro-letter-wrap' + id).show().animate({
// // 			'opacity': 1
// // 		}, 400);
// // 	}).on('click', 'div.intro-letter-wrap', function () {
// // 		// 隐藏绘图
// // 		$('div.intro-letter-block').animate({
// // 			'opacity': 0
// // 		}, 300, function () {
// // 			$('div.intro-letter-block').hide();
// // 			$('div.intro-letter-wrap').hide();
// // 			$('div.intro-select-wrap').show();
// // 		});

// // 	});
// // };

// // $(init);