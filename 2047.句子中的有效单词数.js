/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
    let arr = sentence.split(' ');
    arr = arr.filter((cur) => {
        if (cur !== '') {
            return true;
        }
    });
    let res = 0;
    for (let s of arr) {
        let flag = false;
        let isVaild = true;
        let n = s.length;
        for (let i = 0; i < n; ++i) {
            let ch = s.charAt(i);
            if (ch >= '0' && ch <= '9') {
                isVaild = false;
                break;
            }
            if ((ch === '!' || ch === '.' || ch === ',') && i !== n - 1) {
                isVaild = false;
                break;
            }
            if (ch === '-' && (flag || i === 0 || i === n - 1 || !isLetter(s.charAt(i - 1)) || !isLetter(s.charAt(i + 1)))) {
                isVaild = false;
                break;
            } else if (ch === '-') {
                flag = true;
            }
        }
        if (isVaild) {
            ++res;
        }
    }
    return res;
};

const isLetter = (ch) => {
    if (ch >= 'a' && ch <= 'z') {
        return true;
    }
    return false;
}