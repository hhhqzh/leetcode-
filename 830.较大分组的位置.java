class Solution {
    public List<List<Integer>> largeGroupPositions(String s) {
        List<List<Integer>> res = new ArrayList<>();
        int start = 0, end = 1;
        for(int i = 1; i < s.length(); ++i){
            if(s.charAt(i) == s.charAt(i - 1))
                ++end;
            else {
                if(end - start >= 3){
                    List<Integer> list = new ArrayList<>();
                    list.add(start);
                    list.add(end - 1);
                    res.add(list);
                }
                start = i;
                end = i + 1;
            }
        }
        if(end == s.length() && end - start >= 3){
            List<Integer> list = new ArrayList<>();
            list.add(start);
            list.add(end - 1);
            res.add(list);
        }
        return res;
    }
}