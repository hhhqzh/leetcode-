/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function (s) {
    if (s.length < 10)
        return [];
    let map = new Map();
    for (let i = 10; i <= s.length; ++i) {
        let t = s.slice(i - 10, i);
        if (map.has(t)) {
            map.set(t, map.get(t) + 1);
        } else {
            map.set(t, 1);
        }
    }
    let res = [];
    for (let m of map) {
        if (m[1] > 1) {
            res.push(m[0]);
        }
    }
    return res;
};