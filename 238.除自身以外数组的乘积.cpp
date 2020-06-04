class Solution {
public:
    // 不允许用除法
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> res(n, 1);
        int left = 1; // 从左边累乘
        int right = 1; // 从右边累乘
        for(int i=0; i<n; ++i){
            res[i] *= left; // 乘元素左边的乘积
            left *= nums[i];

            res[n - i - 1] *= right;// 乘元素右边的乘积
            right *= nums[n - i - 1];
        }
        return res;
    }
};