/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let n = grid.length;
    let vertical = new Array(n).fill(0);
    let horizontal = new Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            vertical[j] = Math.max(vertical[j], grid[i][j]);
            horizontal[i] = Math.max(horizontal[i], grid[i][j]);
        }
    }
    let res = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            let min = Math.min(vertical[i], horizontal[j]);
            res += min - grid[i][j];
        }
    }
    return res;
};