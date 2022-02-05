/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    let m = grid.length,
        n = grid[0].length;
    let dis = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    let res = 0;

    const dfs = (i, j, total) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
            res = Math.max(res, total);
            return;
        }
        let t = grid[i][j];
        total += t;
        grid[i][j] = 0;
        for (let d of dis) {
            dfs(i + d[0], j + d[1], total);
        }
        grid[i][j] = t;
        total -= t;
    }

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] !== 0) {
                dfs(i, j, 0);
            }
        }
    }
    return res;
};