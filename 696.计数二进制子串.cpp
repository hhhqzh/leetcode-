class Solution {
public:
    int countBinarySubstrings(string s) {
        // int preCur, cur = 1, sum = 0;
        // for(int i = 1; i <s.length(); ++i){
        //     if(s[i] == s[i-1])
        //         ++cur;
        //     else {
        //         preCur = cur;
        //         cur = 1;
        //     }
        //     if(preCur >= cur)
        //         ++sum;
        // }
        // return sum;

        int num0 = 0, num1 = 0, sum = 0;
        for(int i=0; i<s.length();){
            while(s[i] == '0'){
                num0++;
                i++;
            }
            sum += min(num0, num1);
            num1 = 0;
            while(s[i] == '1'){
                num1++;
                i++;
            }
            sum += min(num0, num1);
            num0 = 0;
        }
        return sum;
    }
};