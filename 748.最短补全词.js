/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    licensePlate = licensePlate.toLowerCase();
    let charArr = new Array(26).fill(0);
    for (let ch of licensePlate) {
        if (ch >= 'a' && ch <= 'z') {
            ++charArr[ch.charCodeAt() - 97];
        }
    }
    let res = "";
    for (let word of words) {
        let arr = [].concat(charArr);
        for (let ch of word) {
            --arr[ch.charCodeAt() - 97];
        }
        if (Math.max(...arr) === 0) {
            if (word.length < res.length || res === "") {
                res = word;
            }
        }
    }
    return res;
};