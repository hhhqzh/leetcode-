/**
 * @param {number} n
 * @return {number}
 */
// dfs
var integerReplacement = function (n) {
    let map = new Map(); // 用 map 保存已计算的
    const dfs = (n) => {
        if (n === 1) {
            return 0;
        }
        if (map.has(n))
            return map.get(n);
        let c;
        if (n % 2 === 0)
            c = dfs(n / 2) + 1;
        else {
            c = Math.min(dfs(n + 1), dfs(n - 1)) + 1;
        }
        map.set(n, c);
        return c;
    }
    return dfs(n);
};

// dp 数组越界。。。
var integerReplacement = function (n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 2; i <= n; ++i) {
        if (i % 2 === 0)
            dp[i] = dp[i / 2] + 1;
        else {
            dp[i] = Math.min(dp[i - 1], dp[(i + 1) / 2] + 1) + 1;
        }
    }
    return dp[n];
};

// 位运算
var integerReplacement = function (n) {
    let ans = 0;
    while (n !== 1) {
        if (n % 2 == 0) {
            // 偶数的话，直接右n
            n >>= 1;
        } else {
            // 奇数的话，要看最低位是否有连续的 1，若有连续的 1，则 +1 可以消除连续的 1，否则 -1 消除最后一个 1。
            // 注意 3 是特殊情况
            if (n != 3 && ((n >> 1) & 1) == 1)
                ++n;
            else
                --n;
        }
        ans++;
    }
    return ans;
};