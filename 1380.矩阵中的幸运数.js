/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let res = [];
    let minArr = [];
    for (let m of matrix) {
        let min = m[0];
        for (n of m) {
            min = Math.min(min, n);
        }
        minArr.push(min);
    }
    for (let j = 0; j < matrix[0].length; ++j) {
        let max = matrix[0][j];
        for (let i = 0; i < matrix.length; ++i) {
            max = Math.max(max, matrix[i][j]);
        }
        if (minArr.indexOf(max) !== -1) {
            res.push(max);
        }
    }

    return res;
};

/**
 * row[i] 表示第i行的最小值在第row[i]列
 * col[j] 表示第j列的最大值在第col[j]列
 */
var luckyNumbers = function (matrix) {
    let m = matrix.length, n = matrix[0].length;
    let row = new Array(m).fill(0), col = new Array(n).fill(0);
    let res = [];
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (matrix[i][j] < matrix[i][row[i]]) {
                row[i] = j;
            }
            if (matrix[i][j] > matrix[col[j]][j]) {
                col[j] = i;
            }
        }
    }
    for (let i = 0; i < m; ++i) {
        if (i === col[row[i]]) {
            res.push(matrix[i][row[i]]);
        }
    }
    return res;
}