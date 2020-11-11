class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int i = nums.size() - 1;
        while(i > 0 && nums[i] <= nums[i - 1])
            --i;
        if(i <= 0){
            sort(nums.begin(), nums.end());
            return;
        }            
        sort(nums.begin() + i, nums.end());
        for(int j = i; j < nums.size(); ++j){
            if(nums[j] > nums[i - 1]){
                int temp = nums[j];
                nums[j] = nums[i - 1];
                nums[i - 1] = temp;
                return;
            }
        }
    }
};