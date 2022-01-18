/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let dis = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];
    let [m, n] = [board.length, board[0].length];
    let vis = new Array(m).fill(0).map(() => {
        return new Array(n).fill(false)
    });

    const dfs = (i, j, idx) => {
        if (idx === word.length) {
            return true;
        }
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false;
        }
        if (!vis[i][j] && board[i][j] === word.charAt(idx)) {
            vis[i][j] = true;
            for (let d of dis) {
                if (dfs(i + d[0], j + d[1], idx + 1)) {
                    return true;
                }
            }
            vis[i][j] = false;
        }
    }

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};