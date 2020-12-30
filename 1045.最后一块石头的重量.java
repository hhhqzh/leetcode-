class Solution {
    public int lastStoneWeight(int[] stones) {
        Arrays.sort(stones);
        int len = stones.length - 1;
        for(int i = 0; i < len; ++i){
            stones[len] = stones[len] - stones[len - 1];
            stones[len - 1] = 0;
            Arrays.sort(stones);
        }
        return stones[len];
    }
}