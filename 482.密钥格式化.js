/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function (s, k) {
    let res = [];
    let c = 0;
    s = s.replaceAll('-', '');
    for (let i = s.length - 1; i >= 0; --i) {
        let ss = s.charAt(i);
        ++c;
        if (ss >= 'a' && ss <= 'z')
            ss = ss.toUpperCase();
        res.unshift(ss);
        if (c === k && i > 0) {
            c = 0;
            res.unshift('-');
        }
    }
    return res.join('');
};