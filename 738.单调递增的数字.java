class Solution {
    public int monotoneIncreasingDigits(int N) {
        String s = String.valueOf(N);
        char[] ch = s.toCharArray();
        int n = s.length();
        for(int i = n - 1; i > 0; --i){
            if(ch[i] < ch[i - 1]){
                ch[i - 1] -= 1;
                for(int j = i; j < n; ++j)
                    ch[j] = '9';
            }
        }
        return Integer.parseInt(new String(ch));
    }
}