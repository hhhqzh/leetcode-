/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
// dp
/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
    if (time === 0) {
        return security.map((cur, idx, arr) => {
            return idx;
        });
    }
    let n = security.length;
    let res = [],
        left = new Array(n).fill(0), // left[i]表示i前面大于等于security[i]且连续的个数
        right = new Array(n).fill(0); // right[i]表示i后面大于等于security[i]且连续的个数
    for (let i = 1; i < n; ++i) {
        if (security[i - 1] >= security[i]) {
            left[i] = left[i - 1] + 1;
        }
    }
    for (let i = n - 2; i >= 0; --i) {
        if (security[i + 1] >= security[i]) {
            right[i] = right[i + 1] + 1;
        }
    }
    for (let i = 0; i < n; ++i) {
        if (left[i] >= time && right[i] >= time) {
            res.push(i);
        }
    }
    return res;
};