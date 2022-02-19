/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let m = grid.length,
        n = grid[0].length;
    let dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];
    let count = 0;

    const dfs = (grid, i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
            return;
        }
        grid[i][j] = '0';
        for (let d of dirs) {
            dfs(grid, i + d[0], j + d[1]);
        }
    }

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j);
                ++count;
            }
        }
    }

    return count;
};