class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int []bucket = new int[101];
        for(int i = 0; i < nums.length; ++i)
            ++bucket[nums[i]];
        int temp = bucket[0];
        for(int i = 1; i < 101; ++i){
            int t = bucket[i];
            bucket[i] = temp;
            temp += t;
        }
        bucket[0] = 0;
        for(int i = 0; i < nums.length; ++i)
            nums[i] = bucket[nums[i]];
        return nums;
    }
}