/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    let m = dungeon.length,
        n = dungeon[0].length;
    // 倒叙dp，dp[i][j]为从i、j出发，到达终点需要最少的血量
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    dp[m - 1][n - 1] = dungeon[m - 1][n - 1] > 0 ? 1 : 1 - dungeon[m - 1][n - 1];
    for (let i = n - 2; i >= 0; --i) {
        dp[m - 1][i] = dungeon[m - 1][i] >= dp[m - 1][i + 1] ? 1 : dp[m - 1][i + 1] - dungeon[m - 1][i];
    }
    for (let i = m - 2; i >= 0; --i) {
        dp[i][n - 1] = dungeon[i][n - 1] >= dp[i + 1][n - 1] ? 1 : dp[i + 1][n - 1] - dungeon[i][n - 1];
    }
    for (let i = m - 2; i >= 0; --i) {
        for (let j = n - 2; j >= 0; --j) {
            let temp = Math.min(dp[i + 1][j], dp[i][j + 1]);
            dp[i][j] = dungeon[i][j] >= temp ? 1 : temp - dungeon[i][j];
        }
    }
    return dp[0][0]
};