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

/**
 * @param {character[][]} grid
 * @return {number}
 */
// 并查集
class UnionFind {
    /**
     * 连通分量的个数
     */
    count;
    parent;

    constructor(grid) {
        this.count = 0;
        let row = grid.length,
            col = grid[0].length;
        this.parent = new Array(row * col).fill(-1);
        for (let i = 0; i < row; ++i) {
            for (let j = 0; j < col; ++j) {
                if (grid[i][j] === '1') {
                    this.parent[i * col + j] = i * col + j;
                    ++this.count;
                }
            }
        }
    }

    getCount() {
        return this.count;
    }

    findParent(x) {
        while (x != this.parent[x]) {
            x = this.parent[x];
        }
        return x;
    }

    union(x, y) {
        let xParent = this.findParent(x);
        let yParent = this.findParent(y);
        if (xParent == yParent) {
            return;
        }

        this.parent[yParent] = xParent;
        --this.count;
    }
}
var numIslands = function (grid) {
    let uni = new UnionFind(grid);
    let row = grid.length,
        col = grid[0].length,
        dires = [
            [0, 1],
            [1, 0]
        ];
    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
            if (grid[i][j] === '1') {
                for (let d of dires) {
                    let r = i + d[0],
                        c = j + d[1];
                    if (r >= 0 && r < row && c >= 0 && c < col && grid[r][c] === '1') {
                        uni.union(i * col + j, r * col + c);
                    }
                }
            }
        }
    }
    return uni.count;
};