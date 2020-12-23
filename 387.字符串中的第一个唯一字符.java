class Solution {
    public int firstUniqChar(String s) {
        Map<Character, Integer> map = new HashMap<Character, Integer>();
        int n = s.length();
        if(n == 0)
            return -1;
        for(int i = 0; i < n; ++i){
            char c = s.charAt(i);
            if(map.get(c) == null)
                map.put(c, 1);
            else
                map.put(c, map.get(c) + 1);
        }
        
        for(int i = 0; i < n; ++i){
            if(map.get(s.charAt(i)) == 1)
                return i;
        }
        return -1;
    }
}

class Solution {
    public int firstUniqChar(String s) {
        int[] count = new int[26];
        for(int i = 0; i < s.length(); ++i)
            ++count[s.charAt(i) - 'a'];
        for(int i = 0; i < s.length(); ++i){
            if(count[s.charAt(i) - 'a'] == 1)
                return i;
        }
        return -1;
    }
}