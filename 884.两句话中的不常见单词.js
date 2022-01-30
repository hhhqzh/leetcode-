/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let res = [];
    let str = (s1 + ' ' + s2).split(' ');
    let map = new Map();
    for (let s of str) {
        if (!map.has(s)) {
            map.set(s, 0);
        }
        map.set(s, map.get(s) + 1);
    }
    for (let m of map) {
        if (m[1] === 1) {
            res.push(m[0]);;
        }
    }
    return res;
};