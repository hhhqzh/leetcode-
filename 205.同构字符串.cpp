class Solution {
public:
    bool isIsomorphic(string s, string t) {
        // map<char, int> m1;
        // map<char, int> m2;
        // for(int i = 0; i < s.length(); ++i){
        //     m1[s[i]] = INT_MIN;
        //     m2[t[i]] = INT_MIN;
        // }
        // int flag = 1;
        // for(int i = 0; i < s.length(); ++i){
        //     int temp = s[i] - t[i];
        //     if(m1[s[i]] == INT_MIN && m2[t[i]] == INT_MIN){
        //         m1[s[i]] = temp;
        //         m2[t[i]] = temp;
        //     }
        //     else if(m1[s[i]] != temp || m2[t[i]] != temp){
        //         flag = 0;
        //         break;
        //     }
        // }
        // return flag;
        int i = 0;
        while(i++ < s.length()){
            if(s.find(s[i]) != t.find(t[i]))
                return false;
        }
        return true;
    }
};