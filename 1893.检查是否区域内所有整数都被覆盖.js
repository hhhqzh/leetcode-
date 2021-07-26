/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    for (let i = 0; i < ranges.length; ++i) {
        if (ranges[i][0] > right || ranges[i][1] < left)
            continue;
        if (ranges[i][0] <= left && ranges[i][1] >= right)
            return true;
        if (ranges[i][0] > left && ranges[i][1] < right) {
             return isCovered(ranges, left, ranges[i][0] - 1) && isCovered(ranges, ranges[i][1] + 1, right);
        }
        if (ranges[i][1] < right)
            left = ranges[i][1] + 1;
        if (ranges[i][0] > left)
            right = ranges[i][0] - 1;
    }
    return false;
};