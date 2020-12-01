class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] res = new int[2];
        res[0] = -1;
        res[1] = -1;
        if(nums.length == 0)
            return res;
        int n = nums.length, l = 0, r = n - 1;
        while(l < r){
            int m = l + (r - l) / 2;
            if(nums[m] >= target) r = m;
            else l = m + 1;
        }
        if(nums[l] != target)
            return res;
        res[0] = l;
        // 第二次找的是最后一个位置+1的位置！
        r = n;
        while(l < r){
            int m = l + (r - l) / 2;
            if(nums[m] <= target) l = m + 1;
            else r = m;
        }
        res[1] = l - 1;
        return res;
    }

}