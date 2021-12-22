/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
    let res = 0;
    let s = "";
    while (s.length <= b.length + a.length - 1) {
        s += a;
        ++res;
        if (s.includes(b)) {
            return res;
        }
    }
    return -1;
};

// 暴力
var isSubStr = function (a, b) {
    if (a.length < b.length) {
        return false;
    }
    let idx = a.indexOf(b.charAt(0));
    if (idx === -1 || a.length - idx < b.length) {
        return false;
    }
    for (; idx + b.length - 1 < a.length; ++idx) {
        let i = idx;
        let j = 0;
        let flag = true;
        while (i < a.length && j < b.length) {
            if (a.charAt(i) !== b.charAt(j)) {
                flag = false;
                break;
            }
            ++i;
            ++j;
        }
        if (flag) {
            return true;
        }
    }
    return false;
}

// KMP