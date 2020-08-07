class Solution {
public:
    int m, n;

    int dir[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}}; 

    vector<vector<int>> pacificAtlantic(vector<vector<int>>& matrix) {
        vector<vector<int>> res;
        if(matrix.size() == 0)
            return res;
        m = matrix.size();
        n = matrix[0].size();
        int **reachP = new int*[m];
        int **reachA = new int*[m];
        for(int i = 0; i < m; ++i){
            reachP[i] = new int[n];
            reachA[i] = new int[n];
        }
        for(int i = 0; i < m; ++i){
            for(int j = 0; j < n; ++j){
                reachA[i][j] = 0;
                reachP[i][j] = 0;
            }
        }

        for(int i = 0; i < m; ++i){
            dfs(i, 0, reachP, matrix);
            dfs(i, n - 1, reachA, matrix);
        }

        for(int i = 0; i < n; ++i){
            dfs(0, i, reachP, matrix);
            dfs(m - 1, i, reachA, matrix);
        }

        for(int i = 0; i < m; ++i){
            for(int j = 0; j < n; ++j){
                if(reachA[i][j] && reachP[i][j]){
                    vector<int> t;
                    t.push_back(i);
                    t.push_back(j);
                    res.push_back(t);
                }
            }
        }

        return res;
    }

    void dfs(int r, int c, int** reach, vector<vector<int>>& matrix){
        if(reach[r][c])
            return;
        reach[r][c] = 1;
        for(int i = 0; i < 4; ++i){
            int row = r + dir[i][0];
            int col = c + dir[i][1];
            if(row < 0 || row >= m || col < 0 || col >= n || matrix[r][c] > matrix[row][col])
                continue;
            dfs(row, col, reach, matrix);
        }
    }
};