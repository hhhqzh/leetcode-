// dp 需先计算出公式
class Solution {
public:
    int findTargetSumWays(vector<int>& nums, int S) {
        int sum = 0;
        for(int num: nums)
            sum += num;
        if(sum < S || (S + sum) % 2 == 1)
            return 0;
        int w = (S + sum) / 2;
        int* dp = new int[w + 1]();
        dp[0] = 1;
        for(int num: nums){
            for(int i = w; i >= num; --i)
                dp[i] += dp[i - num];
        }
        return dp[w];
    }
};

//dfs
class Solution {
public:
    int count = 0;
    
    int findTargetSumWays(vector<int>& nums, int S) {
        dfs(0, 0, nums, S);
        return count;
    }

    void dfs(int sum, int index, vector<int>& nums, int target){
        if(nums.size() == index){
            if(sum == target)
                ++count;
            return;
        }
        dfs(sum + nums[index], index + 1, nums, target);
        dfs(sum - nums[index], index + 1, nums, target);
    }
};