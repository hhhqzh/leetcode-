// 回溯去重
class Solution {
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        vector<vector<int>> res;
        if(candidates.size() == 0)
            return res;
        vector<int> temp;
        sort(candidates.begin(), candidates.end());
        int* visited = new int[candidates.size()]();
        dfs(res, temp, candidates, target, visited, 0);
        return res;
    }

    void dfs(vector<vector<int>>& res, vector<int> temp, vector<int>& candidates, int target, int* visited, int cur){
        if(target == 0){
            res.push_back(temp);
            return;
        }
        for(int i = cur; i < candidates.size(); ++i){
            // 去重
            if(i != 0 && candidates[i] == candidates[i - 1] && visited[i - 1] == 0)
                continue;
            if(candidates[i] <= target){
                visited[i] = 1;
                temp.push_back(candidates[i]);
                dfs(res, temp, candidates, target - candidates[i], visited, i + 1);
                temp.pop_back();
                visited[i] = 0;
            }
        }
    }
};