/**
 * @param {number[][]} grid
 * @return {number}
 */
// dfs 用总的1减去能到达边界的1，超时
var numEnclaves = function (grid) {
    let m = grid.length,
        n = grid[0].length;
    let dis = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1]
    ];
    let able = 0;

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            ++able;
            return true;
        }
        if (grid[i][j] === 0 || grid[i][j] === -1) {
            return false;
        }
        grid[i][j] = -1;
        for (let d of dis) {
            if (dfs(i + d[0], j + d[1])) {
                grid[i][j] = 1;
                return true;
            }
        }
        grid[i][j] = 1;
        return false;
    }

    let total = 0;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 1) {
                dfs(i, j);
                ++total;
            }
        }
    }

    return total - able;
};

// 由最外面的1向里面进行搜索，把走到的1变成0
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let m = grid.length,
        n = grid[0].length;
    let dis = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1]
    ];

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
            return;
        }
        grid[i][j] = 0;
        for (let d of dis) {
            dfs(i + d[0], j + d[1]);
        }
    }

    let total = 0;

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if ((i == 0 || i === m - 1 || j === 0 || j === n - 1) && grid[i][j] === 1) {
                dfs(i, j);
            }
        }
    }

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 1) {
                ++total;
            }
        }
    }

    return total;
};