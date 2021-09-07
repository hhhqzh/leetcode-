/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let l = 0, r = 0;
    let res = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i) === 'L')
            ++l;
        else
            ++r;
        if (l === r) {
            l = r = 0;
            ++res;
        }
    }
    return res;
};