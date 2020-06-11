class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length() != t.length())
            return false;
        int count[26] = {0};
        int res = 1;
        for(int i=0; i<s.length(); ++i)
            ++count[s[i] - 'a'];
        for(int i=0; i<t.length(); ++i){
            --count[t[i] - 'a'];
            if(count[t[i] - 'a'] < 0){
                res = 0;
                break;
            }
        }
        return res;
    }
};