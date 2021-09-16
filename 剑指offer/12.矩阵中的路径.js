/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function (board, word) {
    let dis = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let [n, m] = [board.length, board[0].length];
    let vis = new Array(n).fill(0).map(() => {return new Array(m).fill(false)});

    const dfs = (board, r, c, word, index) => {
        if (index === word.length)
            return true;
        if (r < 0 || r == n || c > m || c < 0)
            return false;
        if (!vis[r][c] && board[r][c] === word[index]) {
            vis[r][c] = true;
            for (let d of dis) {
                if (dfs(board, r + d[0], c + d[1], word, index + 1))
                    return true;
            }
            vis[r][c] = false;
        }
        return false;
    }

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (dfs(board, i, j, word, 0))
                return true;
        }
    }
    return false;
};