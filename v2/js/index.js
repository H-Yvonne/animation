var devicePixelRatio = 4;

var page = 6;
var count = 0;
var max = 2000;
var precent = 1;
document.body.addEventListener('wheel', function (e) {
    count += e.deltaY;
    count = Math.min(count, max);
    count = Math.max(count, 0);
    precent = count / max;
    console.log('in', page, precent)
    if (page === 1) {
        if (precent >= 1) {
            page = 2;
            count = 0;
            precent = 0;
        }
    } else if (page === 2) {
        if (precent <= 0) {
            page = 1;
            count = max;
            precent = 1;
        } else if (precent >= 1) {
            page = 3;
            count = 0;
            precent = 0;
        }
    } else if (page === 3) {
        if (precent <= 0) {
            page = 2;
            count = max;
            precent = 1;
        } else if (precent >= 1) {
            page = 4;
            count = 0;
            precent = 0;
        }
    } else if (page === 4) {
        if (precent <= 0) {
            page = 3;
            count = max;
            precent = 1;
        } else if (precent >= 1) {
            page = 5;
            count = 0;
            precent = 0;
        }
    } else if (page === 5) {
        if (precent <= 0) {
            page = 4;
            count = max;
            precent = 1;
        } else if (precent >= 1) {
            page = 6;
            count = 0;
            precent = 0;
        }
    } else if (page === 6) {
        if (precent <= 0) {
            page = 5;
            count = max;
            precent = 1;
        }
    }
    console.log('out', page, precent)
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
    useCount = Math.min(useCount, max);
    useCount = Math.max(useCount, 0);
    precent = useCount / max;
    if (page === 1) {
        if (precent >= 1) {
            useCount = 1;
            page = 2;
            precent = 0;
        }
    } else if (page === 2) {
        if (precent <= 0) {
            useCount = max;
            page = 1;
            precent = 1;
        } else if (precent >= 1) {
            page = 3;
            count = 0;
            precent = 0;
        }
    } else if (page === 3) {
        if (precent <= 0) {
            page = 2;
            count = max;
            precent = 1;
        } else if (precent >= 1) {
            page = 4;
            count = 0;
            precent = 0;
        }
    } else if (page === 4) {
        if (precent <= 0) {
            page = 3;
            count = max;
            precent = 1;
        } else if (precent >= 1) {
            page = 5;
            count = 0;
            precent = 0;
        }
    } else if (page === 5) {
        if (precent <= 0) {
            page = 4;
            count = max;
            precent = 1;
        } else if (precent >= 1) {
            page = 6;
            count = 0;
            precent = 0;
        }
    } else if (page === 6) {
        if (precent <= 0) {
            page = 4;
            count = max;
            precent = 1;
        }
        // if (precent >= 1) {
        //     page = 5;
        //     count = 0;
        //     precent = 0;
        // }
    }
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
//
function canvasDraw() {
    console.log(page, precent)
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
    requestAnimationFrame(canvasDraw);
}
canvasDraw();