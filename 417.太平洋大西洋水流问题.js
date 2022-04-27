/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    let res = [],
        m = heights.length,
        n = heights[0].length,
        dis = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ],
        Pacific = new Array(m).fill(0).map(() => new Array(n).fill(false)),
        Atlanticmark = new Array(m).fill(0).map(() => new Array(n).fill(false));

    const dfs = (i, j, visited, pre) => {
        if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j] || heights[i][j] < pre)
            return;
        visited[i][j] = true;
        for (let d of dis) {
            let x = i + d[0],
                y = j + d[1];
            dfs(x, y, visited, heights[i][j]);
        }
        return false;
    }

    for (let i = 0; i < m; ++i) {
        dfs(i, 0, Pacific, heights[i][0]);
        dfs(i, n - 1, Atlanticmark, heights[i][n - 1]);
    }

    for (let i = 0; i < n; ++i) {
        dfs(0, i, Pacific, heights[0][i]);
        dfs(m - 1, i, Atlanticmark, heights[m - 1][i]);
    }

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (Pacific[i][j] && Atlanticmark[i][j]) {
                res.push([i, j]);
            }
        }
    }
    return res;
};