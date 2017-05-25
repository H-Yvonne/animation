

function DrawEngine(ctx, config) {
    this.ctx = ctx;
    this.config = config;
    var imgs = this.imgs = [];
    for (var i = 0; i < config.length; i++) {
        var img = new Image();
        img.src = './img/' + config[i].index + '.png';
        imgs.push({
            config: config[i],
            img: img,
            start: config[i].start,
            end: config[i].end,
            haveShadow: config[i].hasShadow,
        });
    };
}

DrawEngine.prototype.draw = function (precent) {
    var imgs = this.imgs;
    var ctx = this.ctx;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0, 0, 5, height * precent);
    for (var i = 0; i < this.config.length; i++) {
        ctx.beginPath();
        ctx.save();
        if (imgs[i].haveShadow) {
            ctx.shadowColor = "rgba(0,0,0,0.5)"; //定义投影颜色为蓝色
            ctx.shadowBlur = 15; //定义投影模糊阶数为15像素
        }
        // console.log(imgs[i].width)
        let imgWidth = imgs[i].config.width * devicePixelRatio;
        let imgHeight = imgs[i].config.height * devicePixelRatio;

        let x = imgs[i].start.left * safeWidth + (width - safeWidth) / 2;
        x = imgs[i].start.marginLeft ? x + safeWidth * imgs[i].start.marginLeft : x;
        let y = imgs[i].start.top * safeWidth + (height - safeWidth) / 2;
        y = imgs[i].start.marginTop ? y + safeWidth * imgs[i].start.marginTop : y;
        let scaleXStart = imgs[i].start.scale ? imgs[i].start.scale[0] : 1;
        let scaleYStart = imgs[i].start.scale ? imgs[i].start.scale[1] : 1;
        let rotateStart = imgs[i].start.rotate ? imgs[i].start.rotate : 0;

        let xEnd = imgs[i].end ? imgs[i].end.left * safeWidth + (width - safeWidth > 0 ? width - safeWidth : 0) / 2 : x;
        let xDelta = xEnd - x;
        let yEnd = imgs[i].end ? imgs[i].end.top * safeWidth + (height - safeWidth > 0 ? height - safeWidth : 0) / 2 : y;
        let yDelta = yEnd - y;

        let scaleX = imgs[i].end ? imgs[i].end.scale[0] : scaleXStart;
        let scaleXDelta = scaleX - scaleXStart;

        let scaleY = imgs[i].end ? imgs[i].end.scale[1] : scaleYStart;
        let scaleYDelta = scaleY - scaleYStart;

        let rotate = imgs[i].end ? imgs[i].end.rotate || 0 : 0;
        let rotateDelta = rotate - rotateStart;

        ctx.translate((x + xDelta * precent) * devicePixelRatio, (y + yDelta * precent) * devicePixelRatio);
        ctx.scale(scaleXStart + scaleXDelta * precent, scaleYStart + scaleYDelta * precent);
        ctx.rotate((rotateStart + rotateDelta * precent) * Math.PI / 180);
        ctx.drawImage(
            imgs[i].img,
            0, 0, imgs[i].img.width || 600, imgs[i].img.height || 600,
            0, 0, imgWidth, imgHeight
        );
        ctx.restore();
    }
}

//