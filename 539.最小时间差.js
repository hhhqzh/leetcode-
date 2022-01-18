/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    for (let i = 0; i < timePoints.length; ++i) {
        let arr = timePoints[i].split(":");
        timePoints[i] = parseInt(arr[0]) * 60 + parseInt(arr[1]);
    }
    timePoints.sort((a, b) => {
        return a - b;
    });
    let minRes = Number.MAX_SAFE_INTEGER;
    let n = timePoints.length;
    for (let i = 1; i < n; ++i) {
        if (i === n - 1) {
            minRes = Math.min(minRes, timePoints[n - 1] - timePoints[0], timePoints[0] + 1440 - timePoints[n - 1]);
        }
        minRes = Math.min(minRes, timePoints[i] - timePoints[i - 1], timePoints[i - 1] + 1440 - timePoints[i]);
    }
    return minRes;
};

var findMinDifference = function (timePoints) {
    for (let i = 0; i < timePoints.length; ++i) {
        let arr = timePoints[i].split(":");
        timePoints[i] = parseInt(arr[0]) * 60 + parseInt(arr[1]);
    }
    timePoints.sort((a, b) => {
        return a - b;
    });
    let minRes = timePoints[0] + 1440 - timePoints[timePoints.length - 1];
    for (let i = 1; i < timePoints.length; ++i) {
        minRes = Math.min(minRes, timePoints[i] - timePoints[i - 1]);
    }
    return minRes;
};