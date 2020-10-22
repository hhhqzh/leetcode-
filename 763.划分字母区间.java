class Solution {
    public List<Integer> partitionLabels(String S) {
        int[] last = new int[26];
        for(int i = 0; i < S.length(); ++i)
            last[S.charAt(i) - 'a'] = i;
        List<Integer> list = new ArrayList<>();
        int j = 0, index = 0;
        for(int i = 0; i < S.length(); ++i){
            j = Math.max(j, last[S.charAt(i) - 'a']);
            if(i == j){
                list.add(i - index + 1);
                index = i + 1;
            }
        }
        return list;
    }
}