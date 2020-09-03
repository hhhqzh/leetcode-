/**
当 i≥2 时，假设对正整数 i 拆分出的第一个正整数是 j（1 ≤ j <i），则有以下两种方案：

    将 i 拆分成 j 和 i−j 的和，且 i−j 不再拆分成多个正整数，此时的乘积是 j×(i−j);

    将 i 拆分成 j 和 i−j 的和，且 i−j 继续拆分成多个正整数，此时的乘积是 j×dp[i−j];
**/

class Solution {
public:
    int integerBreak(int n) {
        vector<int> dp(n + 1, 0);
        dp[1] = 1;
        for(int i = 2; i <= n; ++i){
            for(int j = 1; j < i; ++j)
                dp[i] = max(dp[i], max(j * dp[i - j], j * (i - j)));
        }
        return dp[n];
    }
};