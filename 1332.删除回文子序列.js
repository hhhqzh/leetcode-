/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
    let l = 0,
        r = s.length - 1;
    while (l < r) {
        if (s.charAt(l) !== s.charAt(r)) {
            return 2;
        }
        ++l;
        --r;
    }
    return 1;
};