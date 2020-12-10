class Solution {
    public int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];
        for(int i = 0; i < m; ++i){
            for(int j = 0; j < n; ++j)
                dp[i][j] = 1;
        }
        for(int i = 1; i < m; ++i){
            for(int j = 1; j < n; ++j){
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[m - 1][n - 1];
    }
}

// 回溯超时！！
class Solution {
    public int count = 0;

    public int uniquePaths(int m, int n) {
        dfs(m, n, 0, 0);
        return count;
    }

    public void dfs(int m, int n, int i, int j){
        if(i == m - 1 && j == n - 1){
            ++count;
            return;
        }
        if(i + 1 < m){
            dfs(m, n, i + 1, j);
        }
        if(j + 1 < n){
            dfs(m, n, i, j + 1);
        }
    }
}