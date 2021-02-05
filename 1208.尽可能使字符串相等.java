class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        int l = 0;
        int res = 0;
        int count = 0;
        for(int i = 0; i < s.length(); ++i) {
            count += Math.abs(s.charAt(i) - t.charAt(i));
            while(count > maxCost) {
                count -= Math.abs(s.charAt(l) - t.charAt(l));
                ++l;
            }
            res = Math.max(res, i - l + 1);
        }
        return res;
    }
}

class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        int l = 0, r = 0;
        int count = 0;
        int n = s.length();
        while(r < n) {
            count += Math.abs(s.charAt(r) - t.charAt(r));
            ++r;
            if(count > maxCost) {
                count -= Math.abs(s.charAt(l) - t.charAt(l));
                ++l;
            }
        }
        return n - l;
    }
}