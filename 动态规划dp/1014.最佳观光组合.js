/**
 * @param {number[]} values
 * @return {number}
 */
/* 把 values[i] + values[j] + i - j 转换成 values[i] + i 和 values[j] - j 两部分
 * i < j，用 dp 保存之前最大的 values[i] + i
 */
var maxScoreSightseeingPair = function (values) {
    let left = values[0];
    let res = Number.MIN_SAFE_INTEGER;
    for (let j = 1; j < values.length; ++j) {
        res = Math.max(res, left + values[j] - j);
        left = Math.max(left, values[j] + j);
    }
    return res;
};