class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& nums, int r, int c) {
        int m = nums.size(), n = nums[0].size();
        if(m * n != r * c)
            return nums;
        vector<vector<int>> res;
        int index = 0;
        for(int i = 0; i < r; ++i){
            vector<int> t;
            for(int j = 0; j < c; ++j){
                t.push_back(nums[index / n][index % n]);
                index++;
            }
            res.push_back(t);
        }
        return res;
    }
};