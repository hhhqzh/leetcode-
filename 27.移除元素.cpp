class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        if(nums.size() == 0)
            return 0;
        int i = 0, j = 0;
        while(i < nums.size()){
            if(nums[i] != val){
                nums[j] = nums[i];
                ++j;
            }
            ++i;
        }
        return j;
    }

};