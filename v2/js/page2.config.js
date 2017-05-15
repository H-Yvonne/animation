var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;
var safeWidth = Math.min(height, width);


var page2Config = [{
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
    }, {
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
    }, {
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
            top: 0.129,
            left: 0.038,
            scale: [1, 1],
            opacity: 0
        },
        index: 30,
        end: {
            top: 0.129,
            left: 0.038,
            scale: [1, 1],
            opacity: 1
        }
    }, {
        width: (796 * safeWidth / 776) * .4,
        height: (114 * safeWidth / 776) * .4,
        start: {
            top: 0.129,
            left: 0.038,
            scale: [1, 1],
            opacity: 0
        },
        index: 31,
        end: {
            top: 0.129,
            left: 0.038,
            scale: [1, 1],
            opacity: 1
        }
    }
]