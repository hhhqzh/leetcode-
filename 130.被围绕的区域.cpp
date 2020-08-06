class Solution {
public:
    int m, n;

    int dir[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

    void solve(vector<vector<char>>& board) {
        if(board.size() == 0)
            return;
        m = board.size();
        n = board[0].size();
        for(int i = 0; i < m; ++i){
            dfs(board, i, 0);
            dfs(board, i, n - 1);
        }
        for(int i = 0; i < n; ++i){
            dfs(board, 0, i);
            dfs(board, m - 1, i);
        }
        for(int i = 0; i < m; ++i){
            for(int j = 0; j < n; ++j){
                if(board[i][j] == 'O')
                    board[i][j] = 'X';
                else if(board[i][j] == 'Q')
                    board[i][j] = 'O';
            }
        }
        return;
    }

    void dfs(vector<vector<char>>& board, int row, int col){
        if(row < 0 || row >= m || col < 0 || col >= n || board[row][col] != 'O')
            return;
        board[row][col] = 'Q';
        for(int i = 0; i < 4; ++i){
            dfs(board, row + dir[i][0], col + dir[i][1]);
        }
    }
};