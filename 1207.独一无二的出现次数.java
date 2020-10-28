class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        if(arr.length == 1)
            return true;
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for(int i = 0; i < arr.length; ++i){
            if(!map.containsKey(arr[i]))
                map.put(arr[i], 1);
            else{
                map.put(arr[i], map.get(arr[i]) + 1);
            }
        }
        int []nums = new int[arr.length + 1];
        for(Map.Entry<Integer, Integer> entry : map.entrySet()){
            ++nums[entry.getValue()];
            if(nums[entry.getValue()] > 1)
                return false;
        }
        return true;
    }
}