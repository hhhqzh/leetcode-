/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let n = s.length,
        res = [],
        l = 0,
        r = n;
    for (let i = 0; i < n; ++i) {
        if (s.charAt(i) === 'I') {
            res.push(l);
            ++l;
        } else {
            res.push(r);
            --r;
        }
    }
    res.push(l);
    return res;
};