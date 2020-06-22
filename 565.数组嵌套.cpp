class Solution {
public:
    int arrayNesting(vector<int>& nums) {
        // vector<vector<int>> res;
        // int n = nums.size();
        // int Max = 0;
        // for(int i = 0; i < n; ++i){`
        //     vector<int> t;
        //     int j = i;
        //     while(find(t.begin(), t.end(), nums[j]) == t.end()){
        //         t.push_back(nums[j]);
        //         j = nums[j];
        //     }
        //     Max = t.size() > Max ? t.size() : Max;
        //     res.push_back(t);
        // }
        // return Max;

        // 环
        int Max = 0;
        for (int i = 0; i < nums.size(); i++) {
            int cnt = 0;
            for (int j = i; nums[j] != -1; ) {
                cnt++;
                int t = nums[j];
                nums[j] = -1; // 标记该位置已经被访问
                j = t;

            }
            Max = Max> cnt? Max: cnt;
        }
        return Max;
    }
};