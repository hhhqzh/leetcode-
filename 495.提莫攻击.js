/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let res = 0;
    timeSeries[0] += duration;
    for (let i = 1; i < timeSeries.length; ++i) {
        if (timeSeries[i - 1] <= timeSeries[i]) {
            res += duration;
        } else {
            res += timeSeries[i] - timeSeries[i - 1] + duration;
        }
        curEnd = timeSeries[i] + duration;
    }
    res += duration;
    return res;
};