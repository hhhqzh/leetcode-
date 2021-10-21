/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function (digits) {
    let c = 1;
    let i = digits.length - 1;
    while (i >= 0) {
        digits[i] += c;
        if (digits[i] < 10)
            return digits;
        else {
            digits[i] %= 10;
        }
        --i;
    }
    digits.unshift(1);
    return digits;
};