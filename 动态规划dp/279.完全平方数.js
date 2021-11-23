/**
 * @param {number} n
 * @return {number}
 */

// 完全背包解法
var numSquares = function (n) {
    let temp = Math.floor(Math.sqrt(n));
    let dp = new Array(temp + 1).fill(0).map(() => {
        return new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    })
    // 处理第一个数
    for (let j = 0; j <= n; ++j) {
        dp[1][j] = j;
    }
    for (let i = 2; i <= temp; ++i) {
        let t = i * i;
        for (let j = 0; j <= n; ++j) {
            for (let k = 0; k * t <= j; ++k) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - k * t] + k);
            }
        }
    }
    return dp[temp][n];
};

// dp
// 定义一个函数f(n)表示我们要求的解。f(n)的求解过程为：
// f(n) = 1 + min{
//   f(n-1^2), f(n-2^2), f(n-3^2), f(n-4^2), ... , f(n-k^2) //(k为满足k*k<=n的最大的k)
// }
var numSquares = function (n) {
    let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j * j <= i; ++j) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
};

// BFS
// 可以将每个整数看成图中的一个节点，如果两个整数之差为一个平方数，那么这两个整数所在的节点就有一条边。
// 要求解最小的平方数数量，就是求解从节点 n 到节点 0 的最短路径。
var numSquares = function (n) {
    let queue = [n];
    let set = new Set();
    let level = 0;
    while (queue.length) {
        ++level;
        let size = queue.length;
        while (size--) {
            let cur = queue.shift();
            for (let i = 1; i * i <= cur; ++i) {
                let t = cur - i * i;
                if (t === 0)
                    return level;
                if (set.has(t))
                    continue;
                set.add(t);
                queue.push(t);
            }
        }
    }
    return level;
};