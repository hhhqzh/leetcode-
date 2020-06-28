class Solution {
public:
    string findLongestWord(string s, vector<string>& d) {
        string res = "";
        for(int i = 0; i < d.size(); ++i){
            int l1 = res.length(), l2 = d[i].length();
            // 如果res长度较长或者比较小则跳过
            if(l1 > l2 || l1 == l2 && res < d[i])
                continue;
            // 查找接下来更大的字符子串
            int left1 = 0, left2 = 0;
            while(left1 < s.length() && left2 < l2){
                if(s[left1] == d[i][left2])
                    ++left2;
                ++left1;
            }
            if(left2 == l2)
                res = d[i];
        }
        return res;
    }
};