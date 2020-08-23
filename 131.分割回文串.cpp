// 回溯，判断是否为回文串是通过字符串左右往中间判断
class Solution {
public:
    vector<vector<string>> partition(string s) {
        vector<vector<string>> res;
        vector<string> temp;
        dfs(temp, res, s);
        return res;
    }

    void dfs(vector<string> temp, vector<vector<string>>& res, string s){
        if(s.length() == 0){
            res.push_back(temp);
            return;
        }
        for(int i = 0; i < s.length(); ++i){
            if(isPalindrome(s, 0, i)){
                temp.push_back(s.substr(0, i + 1));
                dfs(temp, res, s.substr(i + 1));
                temp.pop_back();
            }
        }
    }

    bool isPalindrome(string s, int start, int end){
        while(start < end) {
            if(s[start] != s[end])
                return false;
            ++start;
            --end;
        }
        return true;
    }
};

// 回溯，判断是否为回文串是通过动态规划标记字符串s那一段属于回文串，即获取是否为回文串的时间复杂度为O(1)
class Solution {
public:
    vector<vector<string>> partition(string s) {
        vector<vector<string>> res;
        vector<string> temp;
        int len = s.size();
        if(len == 0)
            return res;
        int** isPalindrome = new int* [len];
        for(int i = 0; i < len; ++i)
            isPalindrome[i] = new int[len];
        for(int i = 0; i < len; ++i){
            for(int j = 0; j < len; ++j)
                isPalindrome[i][j] = 0;
        }
        for(int right = 0; right < len; ++right){
            for(int left = 0; left <= right; ++left){
                if(s[left] == s[right] && ((right - left) <= 2 || isPalindrome[left + 1][right - 1]))
                    isPalindrome[left][right] = 1;
            }
        }
        dfs(temp, res, s, 0, isPalindrome);
        return res;
    }

    void dfs(vector<string> temp, vector<vector<string>>& res, string s, int start, int** isPalindrome){
        if(s.size() == start){
            res.push_back(temp);
            return;
        }
        for(int i = start; i < s.length(); ++i){
            if(isPalindrome[start][i]){
                temp.push_back(s.substr(start, i - start + 1));
                dfs(temp, res, s, i + 1, isPalindrome);
                temp.pop_back();
            }
        }
    }
};