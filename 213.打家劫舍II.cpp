class Solution {
public:

    // 分成两个问题，一个是1~n-1，一个是2~n两次dp 
    int rob(vector<int>& nums) {
        int n = nums.size();
        if(n == 0)
            return 0;
        if(n == 1)
            return nums[0];
        int *dp1 = new int[n];
        int *dp2 = new int[n];
        dp1[0] = dp2[0] = 0;
        dp1[1] = nums[0];
        dp2[1] = nums[1];
        for(int i = 2; i < n; ++i){
            dp1[i] = max(dp1[i-1], dp1[i-2] + nums[i-1]);
        }
        for(int i = 2; i < n; ++i){
            dp2[i] = max(dp2[i-1], dp2[i-2] + nums[i]);
        }
        return max(dp1[n-1], dp2[n-1]);
    }
};