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

        // dp
        // vector<int> dp(n + 1, 1);
        // int res = 0;
        // for(int i = 2; i <= n; ++i){
        //     for(int j = 1; j < i; ++j){
        //         if(pairs[i - 1][0] > pairs[j - 1][1]){
        //             dp[i] = max(dp[i], dp[j] + 1);
        //         }
        //     }
        //     res = max(res, dp[i]);
        // }

        // 使用贪心思想扩展数对链，在所有可作为下一个数对的集合中选择第二个数最小的数对添加到数对链。
        // 按照数对第二个数的升序序列遍历所有数对，如果当前数对可以加入链，则加入。
        int res = 1, temp = pairs[0][1];
        for(int i = 1; i < n; ++i){
            if(temp < pairs[i][0]){
                ++res;
                temp = pairs[i][1];
            }
        }
        return res;
    }
};