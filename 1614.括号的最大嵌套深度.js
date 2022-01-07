/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let max = 0;
    let count = 0;
    for (let i = s.length - 1; i >= 0; --i) {
        if (s.charAt(i) === ')') {
            ++count;
            max = Math.max(max, count);
        } else if (s.charAt(i) === '(') {
            --count;
        }
    }
    return max;
};

var maxDepth = function (s) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i) === ')') {
            --count;
        } else if (s.charAt(i) === '(') {
            ++count;
            max = Math.max(max, count);
        }
    }
    return max;
};