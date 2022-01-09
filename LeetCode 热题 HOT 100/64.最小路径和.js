/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length,
        n = grid[0].length;
    for (let i = 1; i < m; ++i)
        grid[i][0] += grid[i - 1][0];
    for (let j = 1; j < n; ++j)
        grid[0][j] += grid[0][j - 1];
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[m - 1][n - 1];
};

// dfs 超时
var minPathSum = function (grid) {
    let m = grid.length,
        n = grid[0].length;
    let res = Number.MAX_SAFE_INTEGER;

    const dfs = (i, j, m, n, total) => {
        if (i === m - 1 && j === n - 1) {
            res = Math.min(res, total + grid[i][j]);
            return;
        }
        if (j < n - 1) {
            dfs(i, j + 1, m, n, total + grid[i][j]);
        }
        if (i < m - 1) {
            dfs(i + 1, j, m, n, total + grid[i][j]);
        }
    }

    dfs(0, 0, m, n, 0);
    return res;
};