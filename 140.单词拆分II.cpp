
// 用了139题的解判断是否能够拆分，复习了一下dp
// 回溯 + 剪枝
// substr(i, j) i表示起始位置，j表示长度而不是终止位置！！！
// 对于用例"aaaaaaaaaaa.....aaaaaaaaa"还是会超时....

class Solution {
public:
    vector<string> res;
    unordered_set<string> set;
    vector<string> temp;

    bool _wordBreak(string str, vector<string>& wordDict){
        if(wordDict.size() == 0)
            return false;
        int* dp = new int[str.length() + 1];
        dp[0] = 1;
        for(int i = 0; i < str.length(); ++i){
            for(auto s : wordDict){
                int len = s.length();
                if(len <= i && str.substr(i - len, len) == s)
                    dp[i] = dp[i] || dp[i - len];
            }
        }
        return dp[str.length()];
    }

    vector<string> wordBreak(string s, vector<string>& wordDict) {
        if(!_wordBreak(s, wordDict))
            return res;
        set = unordered_set<string>(wordDict.begin(), wordDict.end());
        helper(s, 0, 1);
        return res;
    }

    void helper(string s, int l, int r){
        if(l >= s.length()){
            string str;
            for(int i = 0; i < temp.size() - 1; ++i)
                str = str + temp[i] + " ";
            str += temp.back();
            res.push_back(str);
            return;
        }
        for(int i = r; i <= s.length(); ++i){
            string tmp = s.substr(l, i - l);
            if(set.find(tmp) != set.end()){
                temp.push_back(tmp);
                helper(s, i, i + 1);
                temp.pop_back();
            }
        }
    }
};