class Solution {
public:
    int longestPalindrome(string s) {
        map<char, int> m;
        for(int i = 0; i < s.length(); ++i){
            ++m[s[i]];
        }
        int sum = 0;
        for(auto t : m){
            if(t.second % 2 == 0)
                sum += t.second;
            else{
                // 如果字母的数量n为奇数，则选取n-1个该字母组成回文串
                sum += t.second - 1;
            }
        }
        // 最后判断回文串的长度与原字符串的长度，如果小于则表明源字符串中有的字母个数为奇数，所以额外加1，把字母放在中间位置
        if(sum < s.length())
            ++sum;
        return sum;
    }
};