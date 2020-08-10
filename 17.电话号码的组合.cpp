class Solution {
public:
    string list[10] = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

    vector<string> letterCombinations(string digits) {
        vector<string> res;
        if(digits.length() == 0)
            return res;
        string s = "";
        dfs(res, digits, s);
        return res;
    }

    void dfs(vector<string>& res, string digits, string s){
        if(s.length() == digits.length()){
            res.push_back(s);
            return;
        }
        int curDigit = digits[s.length()] - '0';
        string str = list[curDigit];
        for(int i = 0; i < str.length(); ++i){
            s += str[i];
            dfs(res, digits, s);
            s = s.substr(0, s.length() - 1);
        }
    }
};