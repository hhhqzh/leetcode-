/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let flag = 0;
    let index = -1;
    for (let i = 0; i < word.length; ++i) {
        if (word.charAt(i) >= 'A' && word.charAt(i) <= 'Z') {
            ++flag;
            index = i;
        }
    }
    if (flag === word.length || flag === 0 || (flag === 1 && index === 0))
        return true;
    return false;
};

// 正则表达式
var detectCapitalUse = function (word) {
    const reg = /^([A-Z]+|[A-Z][a-z]+|[a-z]+)$/;
    return reg.test(word);
};