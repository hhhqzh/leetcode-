/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let max = Math.pow(2, 31) - 1,
        min = -Math.pow(2, 31);
    // 去掉前后空格
    s = s.trim();
    if (s.length === 0) {
        return 0;
    }
    const isVaild = (ch) => {
        if (ch >= '0' && ch <= '9') {
            return 1;
        }
        return 0;
    }
    let n = s.length;
    let i = 0;
    let negative = false;
    if (s.charAt(i) === '-') {
        negative = true;
        ++i;
    } else if (s.charAt(i) === '+') {
        ++i;
    } else if (!isVaild(s.charAt(i))) {
        return 0;
    }
    let res = 0;
    while (i < n && isVaild(s.charAt(i))) {
        let digit = Number(s.charAt(i));
        // 溢出
        if (!negative && res * 10 + digit > max) {
            return max;
        } else if (negative && -(res * 10 + digit) < min) {
            return min;
        }
        res = res * 10 + digit;
        ++i;
    }
    return negative ? -res : res;
};