class Solution {
public:
    int numDecodings(string s) {
        int n = s.size();
        if(n == 0)
            return 0;
        vector<int> dp(n + 1, 0);
        dp[0] = 1;
        for(int i = 0; i < n; ++i){
            // 当前数字s[i]是否为0
            // 不为0则dp[i + 1]等于dp[i]
            if(s[i] != '0')
                dp[i + 1] = dp[i];
            // 判断是否两个数字决定一个字母
            if(i > 0 && (s[i - 1] == '1' || (s[i - 1] == '2' && s[i] <= '6')))
                // 如果两个数s[i]和s[i-1]决定一个字母，则dp[i + 1] += dp[i - 1]
                dp[i + 1] += dp[i - 1];
        }
        return dp[n];
    }
};