/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let _out = new Array(n).fill(0);
    let _in = new Array(n).fill(0);
    for (let t of trust) {
        _out[t[0] - 1]++;
        _in[t[1] - 1]++;
    }
    for (let i = 0; i < n; ++i) {
        if (_out[i] === 0 && _in[i] === n - 1)
            return i + 1;
    }
    return -1;
};