class Solution {
public:
    int combinationSum4(vector<int>& nums, int target) {
        if(nums.size() == 0)
            return 0;
        if(target == 0)
            return 1;
        sort(nums.begin(), nums.end());
        unsigned long long* dp = new unsigned long long[target + 1]();
        dp[0] = 1;
        for(int i = 1; i <= target; ++i){
            for(int j = 0; j < nums.size() && nums[j] <= i; ++j)
                dp[i] += dp[i - nums[j]];
        }
        return dp[target];
    }
};