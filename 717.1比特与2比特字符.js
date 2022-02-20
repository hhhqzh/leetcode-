/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let i = 0;
    let flag = true;
    while (i < bits.length) {
        if (bits[i] === 1) {
            flag = false;
            ++i;
        } else {
            flag = true;
        }
        ++i;
    }
    return flag
};


var isOneBitCharacter = function (bits) {
    let count = 0;
    let i = bits.length - 2;
    while (i >= 0 && bits[i] === 1) {
        ++count;
        --i;
    }
    return count % 2 === 0;
}