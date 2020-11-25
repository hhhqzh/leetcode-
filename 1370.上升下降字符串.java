class Solution {
    public String sortString(String s) {
        int[] count = new int[26];
        for(int i = 0; i < s.length(); ++i)
            ++count[s.charAt(i) - 'a'];
        String res = "";
        int sum = 1;
        while(sum > 0){
            sum = 0;
            int j;
            for(j = 0; j < 26; ++j){
                if(count[j] > 0){
                    --count[j];
                    res += (char)('a' + j);
                }
            }
            for(j = 25; j >= 0; --j){
                if(count[j] > 0){
                    --count[j];
                    res += (char)('a' + j);
                    sum += count[j];
                }
            }
        }
        return res;
    }
}