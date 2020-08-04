class Solution {
public:
    int m, n;
    
    int dir[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

    int numIslands(vector<vector<char>>& grid) {
        if(grid.size() == 0)
            return 0;
        m = grid.size();
        n = grid[0].size();
        int count = 0;
        for(int i = 0; i < m; ++i){
            for(int j = 0; j < n; ++j){
                if(grid[i][j] != '0'){
                    dfs(grid, i, j);
                    ++count;
                }
            }
        }
        return count;
    }

    void dfs(vector<vector<char>>& grid, int row, int col){
        grid[row][col] = '0';
        for(int i = 0; i < 4; ++i){
            int r = row + dir[i][0];
            int c = col + dir[i][1];
            if(r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == '0')
                continue;
            dfs(grid, r, c);
        }
    }
};