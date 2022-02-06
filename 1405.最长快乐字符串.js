/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    let res = "";
    let arr = [
        ['a', a],
        ['b', b],
        ['c', c]
    ];
    while (1) {
        arr.sort((a, b) => {
            return b[1] - a[1];
        });
        let preSize = res.length;
        for (let t of arr) {
            if (t[1] === 0 || res.length >= 2 && t[0] === res[res.length - 1] && t[0] === res[res.length - 2]) {
                continue;
            }
            res += t[0];
            --t[1];
            break;
        }
        if (preSize === res.length) {
            break;
        }
    }
    return res;
};