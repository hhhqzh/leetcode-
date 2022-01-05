/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    const A = 97;
    s = s.split('');
    // 加头尾
    s.unshift("?");
    s.push("?");
    for (let i = 1; i < s.length - 1; ++i) {
        if (s[i] === '?') {
            let j = 0;
            for (; j < 26; ++j) {
                let ch = A + j;
                if (ch !== s[i - 1].charCodeAt() && ch !== s[i + 1].charCodeAt()) {
                    break;
                }
            }
            s[i] = String.fromCharCode(A + j);
        }
    }
    return s.slice(1, s.length - 1).join("");
};