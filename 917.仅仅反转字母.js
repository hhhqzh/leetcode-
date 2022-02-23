/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
    s = s.split('');
    let i = 0,
        j = s.length - 1;
    while (i < j) {
        while (i < j && !(/^[a-zA-Z]$/.test(s[i]))) {
            ++i;
        }
        while (i < j && !(/^[a-zA-Z]$/.test(s[j]))) {
            --j;
        }
        if (i < j) {
            [s[i], s[j]] = [s[j], s[i]];
            ++i;
            --j;
        }
    }
    return s.join('');
};