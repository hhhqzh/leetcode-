class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        // 记录某行的某位数字是否已存在
        vector<vector<bool>> row(9, vector<bool>(10, false));
        // 记录某列的某位数字是否已存在
        vector<vector<bool>> col(9, vector<bool>(10, false));
        // 记录某3*3方格内，某位数字是否已存在
        vector<vector<bool>> block(9, vector<bool>(10, false));
        
        for(int i = 0; i < 9; ++i){
            for(int j = 0; j < 9; ++j){
                if(board[i][j] != '.'){
                    int num = board[i][j] - '0';
                    row[i][num] = true;
                    col[j][num] = true;
                    int b = i / 3 * 3 + j / 3;
                    block[b][num] = true;
                }
            }
        }

        dfs(board, row, col, block, 0, 0);
        return;
    }

    bool dfs(vector<vector<char>>& board, vector<vector<bool>>& row, vector<vector<bool>>& col, vector<vector<bool>>& block, int i, int j){
        // 寻找空位
        while(board[i][j] != '.'){
            if(++j >= 9){
                ++i;
                j = 0;
            }
            if(i >= 9)
                return true;
        }
        for(int num = 1; num <= 9; ++num){
            int b = i / 3 * 3 + j / 3;
            if(!row[i][num] && !col[j][num] && !block[b][num]){
                board[i][j] = num + '0';
                row[i][num] = true;
                col[j][num] = true;
                block[b][num] = true;
                if(dfs(board, row, col, block, i, j))
                    return true;
                else {
                    // 回溯
                    block[b][num] = false;
                    col[j][num] = false;
                    row[i][num] = false;
                    board[i][j] = '.';
                }
            }
        }
        return false;
    }
};