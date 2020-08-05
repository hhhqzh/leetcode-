class Solution {
public:
    int n;

    int findCircleNum(vector<vector<int>>& M) {
        if(M.size() == 0)
            return 0;
        n = M.size();
        int count = 0;
        for(int i = 0; i < n; ++i){
            if(M[i][i] == 1){
                dfs(M, i);
                ++count;
            }
        }
        return count;
    }

    void dfs(vector<vector<int>>& M, int i){
        M[i][i] = 0;
        for(int j = 0; j < n; ++j){
            if(M[i][j] == 1 && M[j][j] == 1){
                dfs(M, j);
            }
        }
    }
};