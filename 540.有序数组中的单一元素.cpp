class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        // 假设singleElement的下标为index，则在index之前的元素，若下标m为偶数，且m+1<index，则nums[m]=nums[m+1]
        // 在index之后的元素，若m+1>index, 则nums[m]!=nums[m+1]
        // 如果nums[m] == nums[m+1],则index在[m+2,j]之间
        // 如果nums[m] != nums[m+1],则index在[i,m]之间
        int i = 0, j = nums.size() - 1;
        while(i < j){
            int m = i + (j - i) / 2;
            if(m % 2 == 1)
                --m; // 保证m为偶数
            if(nums[m] == nums[m + 1])
                i = m + 2;
            else 
                j = m;
        }
        return nums[i];
    }
};