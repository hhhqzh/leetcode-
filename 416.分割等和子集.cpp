// 01背包
class Solution {
public:
    bool canPartition(vector<int>& nums) {
        int sum = 0;
        for(auto num: nums)
            sum += num;
        if(sum % 2 != 0)
            return false;
        int temp = sum / 2;
        int n = nums.size();
        vector<vector<int>> dp(nums.size() + 1, vector<int>(temp + 1, 0));
        for(int i = 1; i <= n; ++i){
            for(int j = 1; j <= temp; ++j){
                if(j >= nums[i - 1]){
                dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - nums[i - 1]] + nums[i - 1]);
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
        return dp[n][temp] == temp;
    }
};


// 一维数组dp求解
class Solution {
public:
    bool canPartition(vector<int>& nums) {
        int sum = calculateSum(nums);
        if(sum % 2 != 0)
            return false;
        int w = sum / 2;
        vector<bool> dp(w + 1, false);
        dp[0] = true;
        for(auto num : nums){
            for(int i = w; i >= num; --i)
                dp[i] = dp[i] || dp[i - num];
        }
        return dp[w];
    }

    int calculateSum(vector<int> nums){
        int sum = 0;
        for(auto num : nums)
            sum += num;
        return sum;
    }
};