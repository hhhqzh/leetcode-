// dfs超时
class Solution {
public:
    int dis[2][2] = {{1, 0}, {0, 1}};
    int minSum = INT_MAX;

    int minPathSum(vector<vector<int>>& grid) {
        if(grid.size() == 0)
            return 0;
        int m = grid.size();
        int n = grid[0].size();
        dfs(0, 0, m, n, grid, 0);
        return minSum;
    }

   void  dfs(int r, int c, int m, int n, vector<vector<int>>& grid, int sum){
       sum += grid[r][c];
       if(r == m - 1 && c == n - 1){
           minSum = min(minSum, sum);
           return;
       }
       for(int i = 0; i < 2; ++i){
            int row = r + dis[i][0];
            int col = c + dis[i][1];
            if(row >= m || col >= n)
                continue;
            dfs(row, col, m, n, grid, sum);
       }
   }
};

// dp
class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        if(m == 0 || n == 0)
            return 0;
        // 初始化
        for(int i = 1; i < m; ++i)
            grid[i][0] += grid[i - 1][0];
        for(int i = 1; i < n; ++i)
            grid[0][i] += grid[0][i - 1];
        for(int i = 1; i < m; ++i)
            for(int j = 1; j < n; ++j)
                grid[i][j] += min(grid[i - 1][j], grid[i][j - 1]);
        return grid[m - 1][n - 1];
    }
};