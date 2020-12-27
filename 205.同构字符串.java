class Solution {
    public boolean isIsomorphic(String s, String t) {
        int n = s.length();
        if(n == 0)
            return true;
        Map<Character, Character> map = new HashMap<Character, Character>();
        Map<Character, Integer> map2 = new HashMap<Character, Integer>();
        for(int i = 0; i < n; ++i){
            char c1 = s.charAt(i);
            char c2 = t.charAt(i);
            if(map.get(c1) == null){
                if(map2.get(c2) != null)
                    return false;
                map.put(c1, c2);
                map2.put(c2, 1);
            }
            else {
                char temp = map.get(c1);
                if(temp != c2)
                    return false;
            }
        }
        return true;
    }
}