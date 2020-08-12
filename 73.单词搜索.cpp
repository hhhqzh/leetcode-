class Solution {
public:
    int dir[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    int m, n;

    bool exist(vector<vector<char>>& board, string word) {
        if(board.size() == 0)
            return false;
        if(word.length() == 0)
            return false;
        m = board.size();
        n = board[0].size();
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        for(int i = 0; i < m; ++i){
            for(int j = 0; j < n; ++j){
                if(dfs(i, j, board, word, visited, 0))
                    return true;
            }
        }
        return false;
    }

    bool dfs(int r, int c, vector<vector<char>>& board, string word, vector<vector<bool>>& visited, int cur){
        if(word.length() == cur)
            return true;
        if(r < 0 || r >= m || c < 0 || c >= n || board[r][c] != word[cur] || visited[r][c])
            return false;
        visited[r][c] = true;
        for(int i = 0; i < 4; ++i){
            if(dfs(r + dir[i][0], c + dir[i][1], board, word, visited, cur + 1))
                return true;
        }
        visited[r][c] = false;
        return false;
    }
};