class Solution {
public:
    bool validPalindrome(string s) {
        int i = 0, j = s.length() - 1;
        while(i < j){
            if(s[i] == s[j]){
                ++i;
                --j;
            } else {
                // 在试着删除字符时，我们既可以删除左指针指向的字符，也可以删除右指针指向的字符。
                return isPalindrome(s, i, j - 1) || isPalindrome(s, i + 1, j);
            }
        }
        return true;
    }

    bool isPalindrome(string s, int i, int j){
        while(i < j){
            if(s[i++] != s[j--])
                return false;
        }
        return true;
    }
};