/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    let strVec = ["zero", "six", "eight", "two", "seven", "five", "four", "three", "one", "nine"];
    let seq = [0, 6, 8, 2, 7, 5, 4, 3, 1, 9];
    let count = new Array(10);
    const a = 97;
    let cnt = new Array(26).fill(0);
    for (let c of s) {
        ++cnt[c.charCodeAt() - a];
    }
    for (let i = 0; i < 10; ++i) {
        let str = strVec[i];
        let t = Number.MAX_SAFE_INTEGER,
            n = str.length;
        for (let j = 0; j < n; ++j) {
            t = Math.min(t, cnt[str.charCodeAt(j) - a]);
        }
        for (let j = 0; j < n; ++j) {
            cnt[str.charCodeAt(j) - a] -= t;
        }
        count[i] = t;
    }
    let res = [];
    for (let i = 0; i < 10; ++i) {
        for (let j = 0; j < count[i]; ++j) {
            res.push(seq[i]);
        }
    }
    res = res.sort((a, b) => {
        return a - b;
    });
    return res.join("");
};