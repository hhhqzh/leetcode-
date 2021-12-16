/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1 || s.length == numRows)
        return s;
    let arr = new Array(numRows).fill(0).map(() => {
        return new Array()
    });
    let i = 0,
        flag = true;
    for (let ch of s) {
        arr[i].push(ch);
        if (flag) {
            if (i + 1 === numRows) {
                flag = false;
                --i;
            } else {
                ++i;
            }
        } else {
            if (i === 0) {
                flag = true;
                ++i;
            } else {
                --i;
            }
        }
    }
    let res = "";
    for (let a of arr) {
        res += a.join("");
    }
    return res;
};