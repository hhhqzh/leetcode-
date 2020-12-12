// 自己写的dp
class Solution {
    public int wiggleMaxLength(int[] nums) {
        if(nums.length < 2)
            return nums.length;
        int n = nums.length;
        int[] positive = new int[n];
        int[] negative = new int[n];
        for(int i = 0; i < n; ++i){
            positive[i] = 1;
            negative[i] = 1;
        }
        int maxp = 1, maxn = 1;
        for(int i = 1; i < n; ++i){
            if(nums[i] - nums[i - 1] > 0){
                positive[i] = maxn + 1;
                maxp = Math.max(maxp, positive[i]);
            } else if(nums[i] - nums[i - 1] < 0){
                negative[i] = maxp + 1;
                maxn = Math.max(maxn, negative[i]);
            }
        }
        return Math.max(maxp, maxn);
    }
}

// 评论区大神的解
class Solution {
    public int wiggleMaxLength(int[] nums) {
        int n = nums.length;
        if (n < 2) {
            return n;
        }
        int up = 1;
        int down = 1;
        for (int i = 1; i < n; i++) {
            if (nums[i] > nums[i - 1]) {
                up = down + 1;
            }
            if (nums[i] < nums[i - 1]) {
                down = up + 1;
            }
        }
        return Math.max(up, down);
    }
}