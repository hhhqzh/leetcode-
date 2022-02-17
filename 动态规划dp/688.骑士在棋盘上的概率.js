/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
    let dirs = [
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1]
    ];
    // f[i][j][k] 表示为在位置[i][j]经过k步留在棋盘的概率
    let f = new Array(n).fill(0).map(() => {
        return new Array(n).fill(0).map(() => {
            return new Array(k + 1).fill(0)
        })
    });;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            f[i][j][0] = 1;
        }
    }
    for (let p = 1; p <= k; p++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                for (let d of dirs) {
                    let nx = i + d[0],
                        ny = j + d[1];
                    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
                    f[i][j][p] += f[nx][ny][p - 1] / 8;
                }
            }
        }
    }
    return f[row][column][k];
};