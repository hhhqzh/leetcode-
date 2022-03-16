/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let left = 0,
        right = 0;
    let slen = s.length;
    let wordLen = words[0].length;
    let wordNum = words.length;
    let wlen = wordNum * wordLen;
    let wordMap = new Map();
    for (let word of words) {
        let count = wordMap.has(word) ? wordMap.get(word) : 0;
        wordMap.set(word, count + 1);
    }
    let res = [];
    right = wlen - 1;
    while (right < slen) {
        if (match(s.substring(left, right + 1), wordMap, wordNum, wordLen)) {
            res.push(left);
        }
        ++left;
        ++right;
    }
    return res;
};

function match(str, wordMap, wordNum, wordLen) {
    let map = new Map();
    for (let i = 0; i < wordNum; i++) {
        let word = str.substring(i * wordLen, (i + 1) * wordLen);
        let count = map.has(word) ? map.get(word) : 0;
        map.set(word, count + 1);
    }
    let matchflag = true;
    for (let [key, value] of wordMap) {
        if (!map.has(key) || map.get(key) !== value) {
            matchflag = false;
        }
    }
    return matchflag;
}