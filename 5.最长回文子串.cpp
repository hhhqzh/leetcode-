// dp
class Solution {
public:
    string longestPalindrome(string s) {
        int len = s.size();
        vector<vector<int>> isp(len, vector<int>(len, 0));
        for(int right = 0; right < len; ++right){
            for(int left = 0; left <= right; ++left)
                isp[left][right] = s[left] == s[right] && (right - left <= 2 || isp[left + 1][right - 1]);
        }
        int start = 0, end = 0;
        int maxLen = 0;
        for(int i = 0; i < len; ++i){
            for(int j = 0; j < len; ++j){
                if(isp[i][j]){
                    if(maxLen < j - i + 1){
                        maxLen = j - i + 1;
                        start = i;
                        end = j;
                    }
                }
            }
        }
        return s.substr(start, end - start + 1);
    }
};