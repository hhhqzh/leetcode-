// DFS 或 邻位对换

class Solution {
public:
    // vector<vector<int>> permute(vector<int>& nums) {
    //     vector<vector<int>> res;
    //     if(nums.size() == 0)
    //         return res;
    //     vector<int> s;
    //     int* visited = new int[nums.size()];
    //     dfs(res, nums, visited, s);
    //     return res;
    // }

    // void dfs(vector<vector<int>>& res, vector<int>& nums, int* visited, vector<int> s){
    //     if(s.size() == nums.size()){
    //         res.push_back(s);
    //         return;
    //     }
    //     for(int i = 0; i < nums.size(); ++i){
    //         if(visited[i] == 1)
    //             continue;
    //         visited[i] = 1;
    //         s.push_back(nums[i]);
    //         dfs(res, nums, visited, s);
    //         s.pop_back();
    //         visited[i] = 0;
    //     }
    // }
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> res;
        if(nums.size() == 0)
            return res;
        Perm(res, nums, 0, nums.size() - 1);
        return res;
    }

    void Perm(vector<vector<int>>& res, vector<int>& nums, int k, int m){
        if(k == m){
            res.push_back(nums);
        } else {
            for(int i = k; i <= m; ++i){
                swap(nums[i], nums[k]);
                Perm(res, nums, k + 1, m);
                swap(nums[i], nums[k]);
            }
        }
    }
};