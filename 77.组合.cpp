class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        vector<vector<int>> res;
        if(k == 0)
            return res;
        vector<int> temp;
        dfs(res, temp, 1, k, n);
        return res;
    }

    void dfs(vector<vector<int>>& res, vector<int>& temp, int cur, int k, int n){
        if(temp.size() == k){
            res.push_back(temp);
            return;
        }
        for(int i = cur; i <= n; ++i){
            temp.push_back(i);
            dfs(res, temp, i + 1, k, n);
            temp.pop_back();
        }
    }
};