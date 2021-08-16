/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
    const MOD = 1000000007;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let count = 0;
    let dp = new Array(maxMove + 1).fill(0).map(() => { return new Array(m).fill(0).map(() => { return new Array(n).fill(0); }) });
    dp[0][startRow][startColumn] = 1;
    for (let i = 0; i < maxMove; ++i) {
        for (let j = 0; j < m; ++j) {
            for (let k = 0; k < n; ++k) {
                let temp = dp[i][j][k];
                if (temp > 0) {
                    for (const direction of directions) {
                        let j1 = j + direction[0], k1 = k + direction[1];
                        if (j1 >= 0 && j1 < m && k1 >= 0 && k1 < n)
                            dp[i + 1][j1][k1] = (dp[i + 1][j1][k1] + temp) % MOD;
                        else
                            count = (count + temp) % MOD;
                    }
                }
            }
        }
    }
    return count;
};