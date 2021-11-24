// 树形dp
// dp[i] 表示当前以 root 为根的树，连续染了 i 个节点的和
var maxValue = function (root, k) {
    const dynamic = (root, k) => {
        let dp = new Array(k + 1).fill(0);
        if (root === null)
            return dp;
        let l_dp = dynamic(root.left, k);
        let r_dp = dynamic(root.right, k);
        // root 不染色
        let l_max = Number.MIN_SAFE_INTEGER,
            r_max = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i <= k; ++i) {
            l_max = Math.max(l_max, l_dp[i]);
            r_max = Math.max(r_max, r_dp[i]);
        }
        dp[0] = l_max + r_max;

        // root 涂色
        for (let i = 1; i <= k; ++i) {
            for (let j = 0; j < i; ++j) {
                dp[i] = Math.max(dp[i], l_dp[j] + r_dp[i - j - 1] + root.val);
            }
        }
        return dp;
    }

    let r_dp = dynamic(root, k);
    return Math.max(...r_dp);
}