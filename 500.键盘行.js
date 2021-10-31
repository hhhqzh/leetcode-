/**
 * @param {string[]} words
 * @return {string[]}
 */
// 暴力
var findWords = function (words) {
    let s1 = "qwertyuiop", s2 = "asdfghjkl", s3 = "zxcvbnm";
    let res = [];
    for (let word of words) {
        let row1 = 0, row2 = 0, row3 = 0;
        let n = word.length;
        let flag = 1;
        for (let w of word) {
            if (s1.indexOf(w) !== -1) {
                if (row2 > 0 || row3 > 0) {
                    flag = 0;
                    break;
                }
                ++row1;
            }
            else if (s2.indexOf(w) !== -1) {
                if (row1 > 0 || row3 > 0) {
                    flag = 0;
                    break;
                }
                ++row2;
            }
            else if (s3.indexOf(w) !== -1) {
                if (row1 > 0 || row2 > 0) {
                    flag = 0;
                    break;
                }
                ++row3;
            }
        }
        if (flag === 1)
            res.push(word);
    }
    return res;
};

var findWords = function (words) {
    const list = [];
    const rowIdx = "12210111011122000010020202"; // 把26个字母转成行号
    // 判断每个字母的行号是否一样
    for (const word of words) {
        let isValid = true;
        const idx = rowIdx[word[0].toLowerCase().charCodeAt() - 'a'.charCodeAt()];
        for (let i = 1; i < word.length; ++i) {
            if (rowIdx[word[i].toLowerCase().charCodeAt() - 'a'.charCodeAt()] !== idx) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            list.push(word);
        }
    }
    return list;
};