class Solution {
public:
    static bool sortPairs(const vector<int>& p1, const vector<int>& p2){
        return p1[1] < p2[1];
    }

    int findLongestChain(vector<vector<int>>& pairs) {
        int n = pairs.size();
        if(n == 0 || n == 1)
            return n;
        // 先根据第二位数字进行排序
        sort(pairs.begin(), pairs.end(), sortPairs);
        vector<int> dp(n + 1, 1);
        int res = 0;
        for(int i = 2; i <= n; ++i){
            for(int j = 1; j < i; ++j){
                if(pairs[i - 1][0] > pairs[j - 1][1]){
                    dp[i] = max(dp[i], dp[j] + 1);
                }
            }
            res = max(res, dp[i]);
        }
        return res;
    }
};