/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
    let a = 1,
        b = 1;
    while (a + b <= k) {
        let t = a + b;
        a = b;
        b = t;
    }
    let res = 0;
    while (k > 0) {
        if (k >= b) {
            k -= b;
            ++res;
        } else {
            let t = b - a;
            b = a;
            a = t;
        }
    }
    return res;
};