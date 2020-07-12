class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        if(g.size() == 0 || s.size() == 0)
            return 0;
        sort(g.begin(), g.end());
        sort(s.begin(), s.end());
        // int res = 0;
        // int i = g.size() - 1, j = s.size() - 1;
        // while(i >= 0 && j >= 0){
        //     if(g[i] <= s[j]){
        //         --j;
        //         ++res;
        //     }
        //     --i;
        // }
        // return res;
        int i = 0, j = 0;
        while(i < g.size() && j < s.size()){
            if(g[i] <= s[j])
                ++i;
            ++j;
        }
        return i;
    }
};