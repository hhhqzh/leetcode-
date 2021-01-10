class Solution {
    public List<String> summaryRanges(int[] nums) {
        List<String> res = new ArrayList<>();
        if(nums.length == 0)
            return res;
        int left = 0;
        for(int i = 0; i < nums.length; ++i) {
            if(i + 1 == nums.length || nums[i] + 1 != nums[i + 1]) {
                res.add(Integer.toString(nums[left]) + (left == i ? "" : "->" + Integer.toString(nums[i])));
                left = i + 1;
            }
        }
        return res;
    }
}