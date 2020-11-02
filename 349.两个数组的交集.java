class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Map<Integer, Integer> m = new HashMap<Integer, Integer>();
        for(int i = 0; i < nums1.length; ++i)
           m.put(nums1[i], 1);
        Set<Integer> result = new HashSet<Integer>();
        for(int i = 0; i < nums2.length; ++i){
            if(m.containsKey (nums2[i]) && m.get(nums2[i]) == 1){
                result.add(nums2[i]);
                m.put(nums2[i], 0);
            }
        }
        int[] res = new int[result.size()];
        int start = 0;
         for (int item : result) {
            res[start] = item;
            ++start;
        }
        return res;
    }
}