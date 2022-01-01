/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    if (m * n !== original.length)
        return [];
    let arr = new Array();
    for (let i = 0; i < m; ++i) {
        let temp = new Array();
        for (let j = 0; j < n; ++j) {
            temp.push(original[i * n + j]);
        }
        arr.push(temp);
    }
    return arr;
};