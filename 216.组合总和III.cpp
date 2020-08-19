class Solution {
public:
    vector<vector<int>> combinationSum3(int k, int n) {
        vector<vector<int>> res;
        if(k == 0 || n == 0)
            return res;
        vector<int> temp;
        dfs(res, temp, k, n, 1);
        return res;
    }

    void dfs(vector<vector<int>>& res, vector<int> temp, int k, int n, int cur){
        if(k == 0 && n == 0){
            res.push_back(temp);
            return;
        }
        if(k == 0 || n == 0)
            return;
        for(int i = cur; i <= 9 && i <= n; ++i){
            temp.push_back(i);
            dfs(res, temp, k - 1, n - i, i + 1);
            temp.pop_back();
        }
    }
};