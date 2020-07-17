class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        if(nums.size() == 0)
            return 0;
        int res = INT_MIN;
        int fn = 0;
        for(int i=0; i<nums.size(); ++i){
            fn = max(fn + nums[i], nums[i]);
            res = max(res, fn);
        }
        return res;
    }
};