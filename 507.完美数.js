/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num === 1) {
        return false;
    }
    let sum = 1;
    let i = 2;
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
            sum += i;
            sum += num / i;
        }
        ++i;
    }
    return sum === num;
};