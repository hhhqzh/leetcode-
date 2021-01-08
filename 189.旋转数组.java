class Solution {
    public void rotate(int[] nums, int k) {
        if(nums.length <= 1)
            return;
        int n = nums.length;
        k = k % n;
        reverse(nums, 0, n - k - 1);
        reverse(nums, n - k, n - 1);
        reverse(nums, 0 , n - 1);
        return;
    }

    public void reverse(int[] nums, int start, int end){
        int mid = (end - start + 1) / 2;
        for(int i = 0; i < mid; ++i){
            int t = nums[start + i];
            nums[start + i] = nums[end - i];
            nums[end - i] = t;
        }
    }
}