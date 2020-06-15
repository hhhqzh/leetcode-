class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int maxOne = 0, t = 0;
        for(int i = 0; i < nums.size(); ++i){
            if(nums[i] == 1)
                ++t;
            else {
                t = 0;
            }
            maxOne = max(maxOne, t);
        }
        return maxOne;
    }
};