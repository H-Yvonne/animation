var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;
var safeWidth = Math.min(height, width);
var zoomPrecent = 10;

var page6Config = [
    //m
    {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.355,
            left: -0.358,
            scale: [3, 3],
            opacity: 1
        },
        index: 37,
        end: {
            top: 0.355,
            left: -0.358,
            scale: [3, 3],
            opacity: 0
        }
    },
    // mf
    {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.456,
            left: 0.075,
            scale: [0.5, 1.25],
            opacity: 0
        },
        index: 41,
        end: {
            top: 0.456,
            left: 0.075,
            scale: [0.5, 1.25],
            opacity: 1
        }
    },
    //e
    {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.355,
            left: -0.488,
            scale: [3, 3],
            opacity: 1
        },
        index: 38,
        end: {
            top: 0.355,
            left: -0.488,
            scale: [3, 3],
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
            opacity: 0
        },
        index: 42,
        end: {
            top: 0.456,
            left: 0.345,
            scale: [0.45, 1.25],
            opacity: 1
        }
    },
    // c1
    {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.315,
            left: 1.6768,
            scale: [-7, 7],
            opacity: 1
        },
        index: 39,
        end: {
            top: 0.315,
            left: 1.6768,
            scale: [-7, 7],
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
            opacity: 0
        },
        index: 43,
        end: {
            top: 0.456,
            left: 0.548,
            scale: [0.45, 1.25],
            opacity: 1
        }
    },
    // c2
    {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.315,
            left: 2.92458,
            scale: [-7, 7],
            opacity: 1,
        },
        index: 40,
        end: {
            top: 0.315,
            left: 2.92458,
            scale: [-7, 7],
            opacity: 0,
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
            opacity: 0
        },
        index: 44,
        end: {
            top: 0.456,
            left: 0.768,
            scale: [0.4, 1.25],
            opacity: 1
        }
    },
    // t1
    {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.448,
            left: 0.605,
            scale: [2, 2],
            opacity: 1
        },
        index: 36,
        end: {
            top: 0.448,
            left: 0.605,
            scale: [2, 2],
            opacity: 1
        }
    },
    // t2
    {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.448,
            left: 0.825,
            scale: [2.1, 2],
            opacity: 1
        },
        index: 36,
        end: {
            top: 0.448,
            left: 0.825,
            scale: [2.1, 2],
            opacity: 0
        }
    },

]