/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
// dfs
var colorBorder = function (grid, row, col, color) {
    let temp = grid[row][col];
    let dir = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ];
    let m = grid.length,
        n = grid[0].length;
    let vis = new Array(m).fill(0).map(() => {
        return new Array(n).fill(0)
    });

    const dfs = (r, c) => {
        if (grid[r][c] !== temp && grid[r][c] !== 0) {
            return 0;
        }
        vis[r][c] = 1;
        if (r === 0 || r === m - 1 || c === 0 || c === n - 1) {
            grid[r][c] = 0;
        }
        for (let d of dir) {
            let r1 = r + d[0],
                c1 = c + d[1];
            if (r1 >= 0 && r1 < m && c1 >= 0 && c1 < n && vis[r1][c1] === 0) {
                if (dfs(r1, c1) === 0) {
                    grid[r][c] = 0;
                }
            }
        }
        return 1;
    }

    dfs(row, col);
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 0) {
                grid[i][j] = color;
            }
        }
    }
    return grid;
};