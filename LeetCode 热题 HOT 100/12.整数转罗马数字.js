/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let res = "";
    let vales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let reps = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    // 贪心，每次都选择尽可能大的符号值
    for (let i = 0; i < vales.length; ++i) {
        let t = Math.floor(num / vales[i]);
        for (let j = 0; j < t; ++j) {
            res += reps[i];
        }
        num %= vales[i];
    }
    return res;
};