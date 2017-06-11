var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;
var safeWidth = Math.min(height, width);
var zoomPrecent = 10;

var page7Config = [
    // mf
    {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.456,
            left: 0.075,
            scale: [0.5, 1.25],
            opacity: 1
        },
        index: 41,
        end: {
            top: 0.456,
            left: 0.355,
            scale: [0.05, 0.125],
            opacity: 0
        }
    },
    //ef
    {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.456,
            left: 0.345,
            scale: [0.45, 1.25],
            opacity: 1
        },
        index: 42,
        end: {
            top: 0.456,
            left: 0.415,
            scale: [0.045, 0.125],
            opacity: 0
        }
    },
    // c1f
    {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.456,
            left: 0.548,
            scale: [0.45, 1.25],
            opacity: 1
        },
        index: 43,
        end: {
            top: 0.456,
            left: 0.468,
            scale: [0.045, 0.125],
            opacity: 0
        }
    },
    // c2f
    {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.456,
            left: 0.768,
            scale: [0.4, 1.25],
            opacity: 1
        },
        index: 44,
        end: {
            top: 0.456,
            left: 0.518,
            scale: [0.045, 0.125],
            opacity: 0
        }
    },
    /****************************** */
    //
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 1,
        start: {
            top: -0.05 * zoomPrecent,
            left: 0.88 * zoomPrecent,
            scale: [1.25 * zoomPrecent, 1.25 * zoomPrecent],
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        hasShadow: true
    }, {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 1,
        start: {
            top: 0.068 * zoomPrecent,
            left: -0.075 * zoomPrecent,
            scale: [2.2, 1]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        }
    }, {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.698 * zoomPrecent,
            left: 0.428 * zoomPrecent,
            scale: [-1.25 * zoomPrecent, -1.25 * zoomPrecent],
        },
        index: 2,
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        hasShadow: true
    },
    // 顶部的t
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: -0.60 * zoomPrecent,
            left: 0.8928 * zoomPrecent,
            scale: [-3.5 * zoomPrecent, -3.5 * zoomPrecent]
        },
        index: 2,
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4

        }
    }, {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 3,
        start: {
            top: 0.381 * zoomPrecent,
            left: -0.160 * zoomPrecent,
            scale: [1.3 * zoomPrecent, 1.3 * zoomPrecent]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        hasShadow: true
    },
    // 右下角
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 3,
        start: {
            top: 0.78 * zoomPrecent,
            left: 1.538 * zoomPrecent,
            scale: [-3, 3]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        }
    },
    //
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 4,
        start: {
            top: -0.218 * zoomPrecent,
            left: -0.9438 * zoomPrecent,
            scale: [4.5, 3]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        hasShadow: true
    },
    // 5
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 5,
        start: {
            top: 0.421 * zoomPrecent,
            left: -0.05 * zoomPrecent,
            scale: [1.2, 1]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        hasShadow: true
    }, {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 6,
        start: {
            top: 0.295 * zoomPrecent,
            left: 0.950 * zoomPrecent,
            scale: [1.3, 1.3],
            rotate: 90
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        }
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 6,
        start: {
            top: 0.45 * zoomPrecent,
            left: 0.405 * zoomPrecent,
            scale: [1.2, 1.3],
            rotate: 90
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        hasShadow: true
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 7,
        start: {
            top: -0.01 * zoomPrecent,
            left: 0.198 * zoomPrecent,
            scale: [1, 1]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        hasShadow: true
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 7,
        start: {
            top: 0.083 * zoomPrecent,
            left: 0.190 * zoomPrecent,
            scale: [1.8, 1.8]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        }
    },
    // 3头上的l
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 8,
        start: {
            top: -0.080 * zoomPrecent,
            left: 0.370 * zoomPrecent,
            scale: [1.3, 1.3]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        hasShadow: true
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 8,
        start: {
            top: 1.430 * zoomPrecent,
            left: -0.550 * zoomPrecent,
            scale: [3.6, -3.0]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        }
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 8,
        start: {
            top: 1.900 * zoomPrecent,
            left: 1.200 * zoomPrecent,
            scale: [4, 4],
            rotate: 180
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        }
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 8,
        start: {
            top: 0.890 * zoomPrecent,
            left: 1.180 * zoomPrecent,
            scale: [1.3, 1.3],
            rotate: 180
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        }
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 9,
        start: {
            top: -0.1720 * zoomPrecent,
            left: 0.760 * zoomPrecent,
            scale: [1.4, 1.4],
            rotate: 90
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        hasShadow: true
    },
    // 10
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 10,
        start: {
            top: 0.2520 * zoomPrecent,
            left: 0.248 * zoomPrecent,
            scale: [1.3, 1.3]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        hasShadow: true
    },
    //11
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 11,
        start: {
            top: -0.1720 * zoomPrecent,
            left: -0.1548 * zoomPrecent,
            scale: [1.3, 1.3]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        hasShadow: true
    }, //12
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        index: 12,
        start: {
            top: -0.0500 * zoomPrecent,
            left: 0.2448 * zoomPrecent,
            scale: [1.3, 1.3]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        hasShadow: true
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.2400 * zoomPrecent,
            left: 1.1748 * zoomPrecent,
            scale: [-1.3, 1.3]
        },
        end: {
            left: 0.1,
            top: 0.3,
            scale: [1, 1],
            marginTop: -0.2,
            marginLeft: -0.4
        },
        index: 13,
        hasShadow: true
    },
]