/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = new Map();
    let maxLen = 0;
    for (let i = 0; i < s.length; ++i) {
        map.set(s.charAt(i), map.has(s.charAt(i)) ? map.get(s.charAt(i)) + 1 : 1);
    }
    for (let m of map) {
        if (m[1] % 2 === 0)
            maxLen += m[1];
        else { // 如果字母的数量n为奇数，则选取n-1个该字母组成回文串
            maxLen += m[1] - 1;
        }
    }
    // 最后判断回文串的长度与原字符串的长度，如果小于则表明源字符串中有的字母个数为奇数，所以额外加1，把字母放在中间位置
    if (maxLen < s.length)
        ++maxLen;
    return maxLen;
};