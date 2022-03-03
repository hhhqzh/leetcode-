/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0, r = x;
    while (l < r) {
        let mid = (r - l) / 2 + l;
        if (mid * mid === x) {
            return Math.floor(mid);
        } else if (mid * mid > x) {
            r = mid;
        } else {
            l = mid;
        }
        if (Math.floor(l) === Math.floor(r)) {
            break;
        }
    }
    return Math.floor(l);
};