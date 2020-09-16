// 官方题解
class Solution {
public:
    int wiggleMaxLength(vector<int>& nums) {
        if(nums.size() == 0)
            return 0;
        int n = nums.size();
        int down = 1, up = 1;
        for(int i = 1; i < n; ++i){
            if(nums[i] - nums[i - 1] > 0){
                up = down + 1;
            } else if (nums[i] - nums[i - 1] < 0){
                down = up + 1;
            }
        }
        return max(up, down);
    }
};


class Solution {
public:
    int wiggleMaxLength(vector<int>& nums) {
        int up = wiggle(nums, true);
        int down = wiggle(nums, false);
        return max(up, down);
    }

    int wiggle(vector<int>& nums, bool isUp){
        int len = 0;
        int n = nums.size();
        if(n == 0)
            return 0;
        for(int i = 1; i < n; ++i){
            if(isUp && nums[i] - nums[i - 1] > 0){
                ++len;
                isUp = !isUp;
            } else if(!isUp && nums[i] - nums[i - 1] < 0) {
                ++len;
                isUp = !isUp;
            }
        }
        return len + 1;
    }
};