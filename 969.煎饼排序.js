/**
 * @param {number[]} arr
 * @return {number[]}
 */
// 每次都把数字最大的往表底移
var pancakeSort = function (arr) {
    let res = [];
    let n = arr.length;
    while (n) {
        let idx = arr.indexOf(n);
        res.push(idx + 1);
        let temp = arr.slice(0, idx + 1);
        temp.reverse();
        arr = [].concat(temp, arr.slice(idx + 1));
        res.push(n);
        temp = arr.slice(0, n);
        temp.reverse();
        arr = [].concat(temp, arr.slice(n));
        --n;
    }
    return res;
};