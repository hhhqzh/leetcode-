/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    if (n < 10)
        return n;
    let cnt = 9,
        a = 9,
        i = 2;
    while (n > cnt + a * 10 * i) {
        a *= 10;
        cnt += a * i;
        ++i;
    }
    n -= cnt;
    let b = Math.floor(n / i);
    let c = n % i;
    let temp = Math.pow(10, i - 1) + b - 1;
    if (c === 0) {
        return temp % 10;
    } else {
        ++temp;
        temp = temp + "";
        return Number.parseInt(temp[c - 1]);
    }
};