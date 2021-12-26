/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    let arr = text.split(' ');
    let res = [];
    for (let i = 2; i < arr.length; ++i) {
        if (arr[i - 2] === first && arr[i - 1] === second) {
            res.push(arr[i]);
        }
    }
    return res;
};