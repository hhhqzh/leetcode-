class Solution {
public:
    bool isSubsequence(string s, string t) {
        if(s.size() == 0)
            return true;
        if(t.size() == 0)
            return false;
        int i = 0, j = 0;
        while(i < s.length() && j < t.length()){
            if(s[i] == t[j])
                ++i;
            ++j;
        }
        return i == s.length();
    }
};