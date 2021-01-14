class Solution {
    public List<Boolean> prefixesDivBy5(int[] A) {
        List<Boolean> list = new ArrayList<>();
        int t = 0;
        for(int i = 0; i < A.length; ++i) {
            t = (t * 2 + A[i]) % 5;
            list.add(t  == 0);
        }
        return list;
    }
}