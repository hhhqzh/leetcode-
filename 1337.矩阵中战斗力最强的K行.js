/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    var map = new Map();
    for (let i = 0; i < mat.length; ++i) {
        map.set(i, getSum(mat[i]));
    }
    var arr = Array.from(map).sort((a, b) => {return a[1] - b[1]});
    console.log(arr);
    var res = [];
    for (let i = 0; i < k; ++i)
        res.push(arr[i][0]);
    return res;
};

var getSum = function(arr) {
    var res = 0;
    for (let i = 0; i < arr.length; ++i)
        res += arr[i];
    return res;
}