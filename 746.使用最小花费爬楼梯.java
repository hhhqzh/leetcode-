class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int n = cost.length;
        int[] res = new int[n];
        res[0] = cost[0];
        res[1] = cost[1];
        for(int i = 2; i < n; ++i){
            res[i] = Math.min(res[i - 1], res[i - 2]) + cost[i];
        }
        return Math.min(res[n - 1], res[n - 2]);
    }
}