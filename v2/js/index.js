var devicePixelRatio = 4;

var page = 1;
var count = 0;
var max = 2000;
var precent = 0;

// 
var pageCount = 0;
var perpage = 2000;
var totalPage = 7;
document.body.addEventListener('wheel', function (e) {
    pageCount += e.deltaY;
    pageCount = Math.max(1, pageCount);
    pageCount = Math.min(totalPage * perpage, pageCount);
    page = Math.floor(pageCount / perpage) + 1;
    precent = (pageCount % perpage) / perpage;
    // console.log(page, precent)
    e.preventDefault();
});

var touchStart = 0;
var touchStartCount = count;
var useCount = count;
document.body.addEventListener('touchstart', function (e) {
    touchStart = e.targetTouches[0].screenY;
    touchStartCount = count;
})

document.body.addEventListener('touchmove', function (e) {
    e.preventDefault();
    var tarchdelta = e.targetTouches[0].screenY - touchStart;
    useCount = touchStartCount;
    useCount += tarchdelta * 5;
    useCount = Math.max(1, useCount);
    useCount = Math.min(totalPage * perpage, useCount);
    page = Math.floor(useCount / perpage) + 1;
    precent = (useCount % perpage) / perpage;
});

document.body.addEventListener('touchend', function (e) {
    count = useCount;
});

var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;
var safeWidth = Math.min(height, width);
// page 1
var page1 = document.querySelector('.page1');
var page1Canvas = page1.querySelector('canvas');
page1Canvas.height = height * devicePixelRatio;
page1Canvas.width = width * devicePixelRatio;
page1Canvas.style.height = height + 'px';
page1Canvas.style.width = width + 'px';
var ctx = page1Canvas.getContext('2d');

var page1 = new DrawEngine(ctx, page1Config);
var page2 = new DrawEngine(ctx, page2Config);
var page3 = new DrawEngine(ctx, page3Config);
var page4 = new DrawEngine(ctx, page4Config);
var page5 = new DrawEngine(ctx, page5Config);
var page6 = new DrawEngine(ctx, page6Config);
var page7 = new DrawEngine(ctx, page7Config);
//
function canvasDraw() {
    // console.log(page, precent)
    if (page === 1) {
        page1.draw(precent);
    }
    if (page === 2) {
        page2.draw(precent);
    }
    if (page === 3) {
        page3.draw(precent);
    }
    if (page === 4) {
        page4.draw(precent);
    }
    if (page === 5) {
        page5.draw(precent);
    }
    if (page === 6) {
        page6.draw(precent);
    }
    if (page === 7) {
        page7.draw(precent);
    }
    if (page === 8) {
        page7.draw(1);
    }
    requestAnimationFrame(canvasDraw);
}
canvasDraw();