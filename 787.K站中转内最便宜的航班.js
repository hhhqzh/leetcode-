/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
 var findCheapestPrice = function (n, flights, src, dst, k) {
    let dp = new Array(n).fill(0).map(() => {return new Array(k + 2).fill(Number.MAX_SAFE_INTEGER)});
    for (let i = 0; i <= k + 1; ++i)
        dp[src][i] = 0;
    for (let i = 1; i <= k + 1; ++i) {
        for (const flight of flights) {
            if (dp[flight[0]][i - 1] != Number.MAX_SAFE_INTEGER) {
                dp[flight[1]][i] = Math.min(dp[flight[1]][i], dp[flight[0]][i - 1] + flight[2]);
            }
        }
    }
    return dp[dst][k + 1] == Number.MAX_SAFE_INTEGER? -1: dp[dst][k + 1];
};