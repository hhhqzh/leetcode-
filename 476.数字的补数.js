/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let c = 0,
        t = num;
    while (t) {
        ++c;
        t = Math.floor(t / 2);
    }
    return num ^ (Math.pow(2, c) - 1);
};