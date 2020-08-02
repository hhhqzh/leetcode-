class Solution {
public:
    int dir[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
    int m, n;

    int maxAreaOfIsland(vector<vector<int>>& grid) {
        if(!grid.size())
            return 0;
        m = grid.size();
        n = grid[0].size();
        int maxArea = 0;
        for(int i = 0;i < m; ++i){
            for(int j = 0; j < n; ++j)
                maxArea = max(maxArea, dfs(grid, i, j));
        }
        return maxArea;
    }

    int dfs(vector<vector<int>>& grid, int row, int col){
        if(row < 0 || row >= m || col < 0 || col >= n || grid[row][col] == 0)
            return 0;
        // 四个方向
        grid[row][col] = 0;
        int area = 1;
        for(int i = 0; i < 4; ++i){
            area += dfs(grid, row + dir[i][0], col + dir[i][1]);
        }
        return area;
    }
};