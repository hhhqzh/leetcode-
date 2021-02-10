class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int k = s1.length();
        int n = s2.length();
        int[] count = new int[26];
        int[] c = new int[26];
        if(k > n)
            return false;
        for(int i = 0; i < k; ++i)
            c[s1.charAt(i) - 'a']++;
        int left = 0, i = 0;
        while(i < n) {
            ++count[s2.charAt(i) - 'a'];
            ++i;
            if(i - left == k) {
                int flag = 1;
                for(int j = 0; j < k; ++j) {
                    if(c[s1.charAt(j) - 'a'] != count[s1.charAt(j) - 'a']) {
                        flag = 0;
                        break;
                    }
                }
                if(flag == 1)    return true;
                --count[s2.charAt(left++) - 'a'];
            }
        }
        return false;
    }
}