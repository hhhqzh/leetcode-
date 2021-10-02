/**
 * @param {number} num
 * @return {string}
 */
 var toHex = function (num) {
    if (num === 0)
        return "0";
    const alpha = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    num = num > 0 ? num : Math.pow(2, 32) - Math.abs(num);
    let res = [];
    while (num) {
        res.unshift(alpha[num % 16]);
        num = Math.floor(num / 16);
    }
    return res.join("");
};

var toHex = function (num) {
    if (num === 0) {
        return "0";
    }
    const res = [];
    for (let i = 0; i < 8 && num; ++i) {
        const val = num & 0xf;
        num >>= 4;
        const digit = val < 10 ? String.fromCharCode('0'.charCodeAt() + val) : String.fromCharCode('a'.charCodeAt() + val - 10);
        res.unshift(digit);
    }
    return res.join('');
}
