class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        // 二分查找
        /*
            如arr = [1,3,4,2,2] 此时数字在 1 — 5 之间
            mid = (1+5)/2 = 3，arr小于等于3的有[1,2,2,3]4个>3个，则1--3中肯定有重复元素
            mid = (1+3)/2 = 2，arr小于等于2的有[1,2,2]3个>2个，则1--2中肯定有重复元素
            mid = (1+2)/2 = 1，arr小于等于1的有[1]1个，则2--2中肯定有重复元素
            返回2
        */
        int left = 1, right = nums.size();
        while(left < right){
            int mid = left + (right - left) / 2;
            int cnt = 0;
            for(int i=0; i<nums.size(); ++i)
                if(nums[i] <= mid)
                    ++cnt;
            if(cnt <= mid)
                left = mid + 1;
            else 
                right = mid;
        }
        return left;
    }
};