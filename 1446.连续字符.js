/**
 * @param {string} s
 * @return {number}
 */
// 双指针
var maxPower = function (s) {
    let n = s.length;
    let res = 0;
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && s.charAt(i) === s.charAt(j)) {
            ++j;
        }
        res = Math.max(res, j - i);
        i = j;
    }
    return res;
};