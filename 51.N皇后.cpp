class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> res;
        vector<bool> col(n, false);
        // 主对角线，有行号+列号=常数
        vector<bool> left(2 * n - 1, false);
        // 次对角线，有行号-列号=常数
        vector<bool> right(2 * n - 1, false);
        vector<string> queen(n);
        string s = "";
        for(int i = 0; i < n; ++i)
            s += '.';
        for(int i = 0; i < n; ++i)
            queen[i] = s;
        dfs(col, left, right, queen, 0, n, res);
        return res;
    }

    void dfs(vector<bool> col, vector<bool> left, vector<bool> right, vector<string> queen, int row, int n, vector<vector<string>>& res){
        if(row == n) {
            res.push_back(queen);
            return;
        }
        for(int c = 0; c < n; ++c){
            if(!col[c] && !left[row + c] && !right[row - c + n - 1]){
                queen[row][c] = 'Q';
                col[c] = true;
                left[row + c] = true;
                right[row - c + n - 1] = true;
                dfs(col, left, right, queen, row + 1, n, res);
                queen[row][c] = '.';
                col[c] = false;
                left[row + c] = false;
                right[row - c + n - 1] = false;
            }
        }
    }
};