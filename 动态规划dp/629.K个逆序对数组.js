/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
/*
    把题目理解错，以为逆序对是 i + 1 = j 且 a[i] > a[j]；
    题目要求的逆序对是 i < j 且 a[i] > a[j]，所以 i 与 j 不一定要相邻！！！

    设 dp[n + 1][k + 1]， 其中 dp[i][j] 为前 i 个数中逆序对为 j 的数组有多少个

    加入把 n 放在最后一个位置，则增加 0 个逆序对，k 个逆序对会出现在在前 n - 1 个数中，即 dp[n - 1][k];
    加入把 n 放在到数第二个位置，则增加 1 个逆序对，k - 1 个逆序对会出现在在前 n - 1 个数中，即 dp[n - 1][k - 1];
    ....
    
    加入把 n 放在第二个位置，则增加 n - 2个逆序对，k - (n - 2) 个逆序对会出现在在前 n - 1 个数中，即 dp[n - 1][k - (n - 2)];
    加入把 n 放在第一个位置，则增加 n - 1个逆序对，k - (n - 1) 个逆序对会出现在在前 n - 1 个数中，即 dp[n - 1][k - (n - 1)];

    递推关系：dp[n][k] = dp[n - 1][k] + dp[n - 1][k - 1] + dp[n - 1][k - 2] + ... + dp[n - 1][k+1-n+1] + dp[n -1][k - n + 1]
            dp[n][k + 1] = dp[n - 1][k + 1] + dp[n - 1][k] + ... +dp[n - 1][k + 1 -n + 1]

    可以推出 dp[n][k + 1] = dp[n - 1][k + 1] + dp[n][k] - dp[n - 1][k - n + 1] 
            => dp[n][k] = dp[n - 1][k] + dp[n][k - 1] - dp[n - 1][k - n];
    要注意，dp[n][k] 可能为负数，所以 dp[n][k] = dp[n][k] + MOD
*/
var kInversePairs = function (n, k) {
    const MOD = 1000000007;
    let dp = new Array(n + 1).fill(0).map(() => {
        return new Array(k + 1).fill(0)
    });
    for (let i = 0; i <= n; ++i) {
        dp[i][0] = 1;
    }
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= k; ++j) {
            dp[i][j] = (j - 1 >= 0 ? dp[i][j - 1] : 0) + dp[i - 1][j] - (j - i >= 0 ? dp[i - 1][j - i] : 0);
            dp[i][j] = (dp[i][j] + MOD) % MOD;
        }
    }
    return dp[n][k];
};