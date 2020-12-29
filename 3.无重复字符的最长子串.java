// 滑动窗口
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        if(n == 0)
            return 0;
        int res = 0;
        int[] hashmap = new int[128];
        int start = 0;
        for(int i = 0; i < n; ++i){
            char c = s.charAt(i);
            ++hashmap[c];
            while(hashmap[c] > 1){
                --hashmap[s.charAt(start)];
                ++start;
            }
            res = Math.max(res, i - start + 1);
        }
        return res;
    }
}