class Solution {
    public boolean wordPattern(String pattern, String s) {
        Map<Character, String> map = new HashMap<>();
        String[] strArr= s.split(" "); 
        if(pattern.length() != strArr.length) return false;
        int n = pattern.length();
        for(int i= 0; i < n; ++i){
            char ch = pattern.charAt(i);
            String t = strArr[i];
            if(map.get(ch) == null){
                if(map.containsValue(t))
                    return false;
                else
                    map.put(ch, t);
            } else {
                String str = map.get(ch);
                if(!t.equals(str))
                    return false;
            }
        }
        return true;
    }
}