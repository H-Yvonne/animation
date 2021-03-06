var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;
var safeWidth = Math.min(height, width);

var page2Config = [
    //
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: -0.05,
            left: 0.88,
            scale: [1.25, 1.25],
        },
        index: 1,
        end: {
            top: -0.05,
            left: 0.88,
            scale: [1.25, 1.25],
        },
        hasShadow: true
    }, {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.698,
            left: 0.428,
            scale: [-1.25, -1.25]
        },
        index: 2,
        end: {
            top: 0.698,
            left: 0.428,
            scale: [-1.25, -1.25],
        },
        hasShadow: true
    },
    // 顶部的t
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.60,
            left: 0.8928,
            scale: [-3.5, -3.5]
        },
        index: 2,
        end: {
            top: 0.60,
            left: 0.8928,
            scale: [-3.5, -3.5]
        }
    }, {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.381,
            left: -0.160,
            scale: [1.3, 1.3]
        },
        index: 3,
        end: {
            top: 0.381,
            left: -0.160,
            scale: [1.3, 1.3]
        },
        hasShadow: true
    },
    // 右下角
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.78,
            left: 1.538,
            scale: [-3, 3]
        },
        index: 3,
        end: {
            top: 0.78,
            left: 1.538,
            scale: [-3, 3]
        }
    },
    //
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: -0.218,
            left: -0.9438,
            scale: [4.5, 3]
        },
        index: 4,
        end: {
            top: -0.218,
            left: -0.9438,
            scale: [4.5, 3]
        },
        hasShadow: true
    },
    // 5
    {

        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.421,
            left: -0.05,
            scale: [1.2, 1]
        },
        index: 5,
        end: {
            top: 0.421,
            left: -0.05,
            scale: [1.2, 1]
        },
        hasShadow: true
    },
    {

        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: -0.01,
            left: 0.198,
            scale: [1, 1]
        },
        index: 7,
        end: {
            top: -0.01,
            left: 0.198,
            scale: [1, 1]
        },
        hasShadow: true
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.083,
            left: 0.190,
            scale: [1.8, 1.8]
        },
        index: 7,
        end: {
            top: 0.083,
            left: 0.190,
            scale: [1.8, 1.8]
        }
    },
    // 3头上的l
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: -0.080,
            left: 0.370,
            scale: [1.3, 1.3]
        },
        index: 8,
        end: {
            top: -0.080,
            left: 0.370,
            scale: [1.3, 1.3]
        },
        hasShadow: true
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 1.430,
            left: -0.550,
            scale: [3.6, -3.0]
        },
        index: 8,
        end: {
            top: 1.430,
            left: -0.550,
            scale: [3.6, -3.0]
        }
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 1.900,
            left: 1.200,
            scale: [4, 4],
            rotate: 180
        },
        index: 8,
        end: {
            top: 1.900,
            left: 1.200,
            scale: [4, 4],
            rotate: 180
        }
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: -0.1720,
            left: 0.760,
            scale: [1.4, 1.4],
            rotate: 90
        },
        index: 9,
        end: {
            top: -0.1720,
            left: 0.760,
            scale: [1.4, 1.4],
            rotate: 90
        },
        hasShadow: true
    },
    // 10
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.2520,
            left: 0.248,
            scale: [1.3, 1.3]
        },
        index: 10,
        end: {
            top: 0.2520,
            left: 0.248,
            scale: [1.3, 1.3]
        },
        hasShadow: true
    },
    //11
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: -0.1720,
            left: -0.1548,
            scale: [1.3, 1.3]
        },
        index: 11,
        end: {
            top: -0.1720,
            left: -0.1548,
            scale: [1.3, 1.3]
        },
        hasShadow: true
        // rotate: 90,
    }, //12
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: -0.0500,
            left: 0.2448,
            scale: [1.3, 1.3]
        },
        index: 12,
        end: {
            top: -0.0500,
            left: 0.2448,
            scale: [1.3, 1.3]
        },
        hasShadow: true
        // rotate: 90,
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.2400,
            left: 1.1748,
            scale: [-1.3, 1.3]
        },
        index: 13,
        end: {
            top: 0.2400,
            left: 1.1748,
            scale: [-1.3, 1.3]
        },
        hasShadow: true
    },

    // 人3
    {
        width: 600 * safeWidth / 776,
        height: (600 * safeWidth / 776) / 1000 * 722,
        start: {
            top: 0.12,
            left: 0.22,
            scale: [1, 1],
            opacity: 0
        },
        index: 27,
        end: {
            top: 0.12,
            left: 0.22,
            scale: [1, 1],
            opacity: 1
        }
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.295,
            left: 0.950,
            scale: [1.3, 1.3],
            rotate: 90
        },
        index: 6,
        end: {
            top: 0.295,
            left: 0.950,
            scale: [1.3, 1.3],
            rotate: 90
        }
    }, // 人1
    {
        width: 740 * safeWidth / 776,
        height: (740 * safeWidth / 776) / 1000 * 563,
        start: {
            top: 0.135,
            left: 0.01,
            scale: [1, 1],
            opacity: 0
        },
        index: 25,
        end: {
            top: 0.135,
            left: 0.01,
            scale: [1, 1],
            opacity: 1
        }
    },
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.45,
            left: 0.405,
            scale: [1.2, 1.3],
            rotate: 90
        },
        index: 6,
        end: {
            top: 0.45,
            left: 0.405,
            scale: [1.2, 1.3],
            rotate: 90
        },
        hasShadow: true
    },
    // 人2
    {
        width: 600 * safeWidth / 776,
        height: (600 * safeWidth / 776) / 1000 * 745,
        start: {
            top: 0.12,
            left: 0.15,
            scale: [1, 1],
            opacity: 0
        },
        index: 26,
        end: {
            top: 0.12,
            left: 0.15,
            scale: [1, 1],
            opacity: 1
        }
    },
    // 人4
    {
        width: 740 * safeWidth / 776,
        height: (740 * safeWidth / 776) / 1000 * 585,
        start: {
            top: 0.129,
            left: 0.038,
            scale: [1, 1],
            opacity: 0
        },
        index: 29,
        end: {
            top: 0.129,
            left: 0.038,
            scale: [1, 1],
            opacity: 1
        }
    }, {
        width: 96 * safeWidth / 776,
        height: (96 * safeWidth / 776),
        start: {
            top: 0.198,
            left: 0.558,
            scale: [0.3, 0.3],
            opacity: 0
        },
        index: 30,
        end: {
            top: 0.198,
            left: 0.558,
            scale: [0.3, 0.3],
            opacity: 1
        }
    }, {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.185,
            left: 0.138,
            scale: [1, 1],
            opacity: 0
        },
        index: 31,
        end: {
            top: 0.185,
            left: 0.138,
            scale: [1, 1],
            opacity: 1
        }
    },
    // 人头上的-
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.068,
            left: 0.075,
            scale: [2.2, 1]
        },
        index: 1,
        end: {
            top: 0.068,
            left: 0.075,
            scale: [2.2, 1]
        }
    },
    // 4 背后的t
    {
        width: safeWidth * .4,
        height: safeWidth * .4,
        start: {
            top: 0.890,
            left: 1.180,
            scale: [1.3, 1.3],
            rotate: 180
        },
        index: 8,
        end: {
            top: 0.890,
            left: 1.180,
            scale: [1.3, 1.3],
            rotate: 180
        }
    }
]