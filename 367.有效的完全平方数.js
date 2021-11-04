/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let l = 0,
        r = num;
    while (l <= r) {
        let mid = Math.floor((r - l) / 2) + l;
        let square = mid * mid;
        if (square === num)
            return true;
        else if (square < num)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return false;
};