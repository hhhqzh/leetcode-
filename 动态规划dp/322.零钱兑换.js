/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 完全背包
var coinChange = function (coins, amount) {
    let n = coins.length;
    let dp = new Array(n).fill(0).map(() => {
        return new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
    });
    for (let i = 0; i < n; ++i)
        dp[i][0] = 0;
    for (let i = 0; i <= amount; ++i) {
        let coin = coins[0];
        if (i % coin === 0)
            dp[0][i] = i / coin;
    }
    for (let i = 1; i < n; ++i) {
        let coin = coins[i];
        for (let j = 1; j <= amount; ++j) {
            for (let k = 0; k * coin <= j; ++k) {
                if (dp[i - 1][j - k * coin] !== Number.MAX_SAFE_INTEGER)
                    dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - k * coin] + k);
            }
        }
    }
    return dp[n - 1][amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[n - 1][amount];
};

// 完全背包
// 一维化
var coinChange = function (coins, amount) {
    let n = coins.length;
    let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    for (let i = 0; i <= amount; ++i) {
        if (i % coins[0] === 0)
            dp[i] = i / coins[0];
    }
    for (let coin of coins) {
        for (let i = amount; i >= coin; --i) {
            // 使用硬币 cois[i] 的个数
            for (let k = 0; k * coin <= i; ++k) {
                dp[i] = Math.min(dp[i], dp[i - k * coin] + k);
            }
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}

// dp[i] = min(dp[i],dp[i-coin]+1)
//如果i-coin存在的话.
// 完全背包一维化
var coinChange = function (coins, amount) {
    let n = coins.length;
    let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let coin of coins) {
        for (let i = coin; i <= amount; ++i) {
            if (dp[i - coin] !== Number.MAX_SAFE_INTEGER) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}