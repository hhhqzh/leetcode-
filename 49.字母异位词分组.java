// 排序 用哈希表
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, ArrayList<String>> map = new HashMap<>();
        for(String str : strs){
            char[] ch = str.toCharArray();
            Arrays.sort(ch);
            String key = String.valueOf(ch);
            if(!map.containsKey(key))
                map.put(key, new ArrayList<String>());
            map.get(key).add(str);
        }
        return new ArrayList(map.values());
    }
}

// 神仙解法！！！
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<Double, ArrayList<String>> map = new HashMap<>();
        int[] prime = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103};
        for(String str : strs){
            Double count = 1.0;
            for(int i = 0; i < str.length(); ++i)
                count *= prime[str.charAt(i) - 'a'];
            if(!map.containsKey(count))
                map.put(count, new ArrayList<String>());
            map.get(count).add(str);
        }
        return new ArrayList(map.values());
    }
}