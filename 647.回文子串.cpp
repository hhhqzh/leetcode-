class Solution {
public:
    int cnt = 0;

    int countSubstrings(string s) {
        //以第i位为中间，往两边扩充，回文串长度分为奇数和偶数
        for(int i=0; i<s.length(); ++i){
            helper(s, i, i); // 奇数长度
            helper(s, i, i+1); //偶数长度
        }
        return cnt;
    }

    void helper(string s, int start, int end){
        while(start >= 0 && end < s.length() && s[start] == s[end]){
            ++cnt;
            --start;
            ++end;
        }
    }
};