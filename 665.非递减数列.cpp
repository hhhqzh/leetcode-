class Solution {
public:
    bool checkPossibility(vector<int>& nums) {
        if(nums.size() <= 1)
            return true;
        int cnt = 0;
        for(int i = 1; i < nums.size() && cnt < 2; ++i){
            if(nums[i] >= nums[i - 1])
                continue;
            ++cnt;
            // 有一个比较特别的情况就是 nums[i] < nums[i - 2]，
            // 修改 nums[i - 1] = nums[i] 不能使数组成为非递减数组，
            // 只能修改 nums[i] = nums[i - 1]。
            if(i - 2 >= 0 && nums[i - 2] > nums[i])
                nums[i] = nums[i - 1];
            else
                nums[i - 1] = nums[i];
        }
        return cnt <= 1;
    }
};