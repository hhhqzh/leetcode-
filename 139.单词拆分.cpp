// 可以用无限次
class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        if(wordDict.size() == 0)
            return false;
        int n = s.length();
        int* dp = new int[n + 1]();
        dp[0] = 1;
        // dict中的单词没有使用限制，因此是一个完全背包问题
        for(int i = 1; i <= n; ++i){
            for(string word: wordDict){
                int len = word.length();
                if(len <= i && word == s.substr(i - len, len) && (dp[i] || dp[i - len]))
                    dp[i] = 1;
            }
        }
        return dp[n];
    }
};