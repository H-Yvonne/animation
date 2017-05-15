var step = 2;
var count = 0;
var max = 2000;
var precent = 0;
document.body.addEventListener('wheel', function (e) {
    count += e.deltaY;
    count = Math.min(count, max);
    count = Math.max(count, 0);
    precent = count / max;
    if (step === 1) {
        if (precent >= 1) {
            count = 0;
            step = 2;
        }
    } else if (step === 2) {
        if (precent <= 0) {
            count = max;
            step = 1;
        }
        // else if (precent >= 1) {
        //     step = 3;
        //     count = 0;
        // }
    }
    // console.log(step, precent)
    e.preventDefault();
});

var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;
var safeWidth = Math.min(height, width);
// page 1
var page1 = document.querySelector('.page1');
var page1Canvas = page1.querySelector('canvas');
page1Canvas.height = height;
page1Canvas.width = width;
page1Canvas.style.height = height + 'px';
page1Canvas.style.width = width + 'px';
var ctx = page1Canvas.getContext('2d');

var page1 = new DrawEngine(ctx, page1Config);
var page2 = new DrawEngine(ctx, page2Config);
//
function canvasDraw() {
    if (step === 1) {
        page1.draw(precent);
    }
    if (step === 2) {
        page2.draw(precent);
    }
    requestAnimationFrame(canvasDraw);
}
canvasDraw();