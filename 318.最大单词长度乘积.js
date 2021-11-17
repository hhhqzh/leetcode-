/**
 * @param {string[]} words
 * @return {number}
 */
// 暴力解法
var maxProduct = function (words) {
    let max = 0;
    for (let i = 0; i < words.length; ++i) {
        for (let j = i + 1; j < words.length; ++j) {
            let flag = 0;
            for (let k = 0; k < words[j].length; ++k) {
                if (words[i].indexOf(words[j][k]) !== -1) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};

/* 
    单词只包含小写字母，可以用 26 位的整数表示单词
    单词两两按位与就能得出两个单词是否有同一个字母
 */
var maxProduct = function (words) {
    let n = words.length;
    let max = 0;
    // 保存每个单词对应的整数
    let hash = new Array(n).fill(0);
    for (let i = 0; i < words.length; ++i) {
        for (let j = 0; j < words[i].length; ++j) {
            hash[i] |= 1 << (words[i].charCodeAt(j) - 97);
        }
    }
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if ((hash[i] & hash[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
}