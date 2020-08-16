class Solution {
public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        vector<vector<int>> res;
        if(nums.size() == 0)
            return res;
        int* visited = new int[nums.size()];
        vector<int> s;
        // 对nums排序
        sort(nums.begin(), nums.end());
        dfs(res, nums, visited, s);
        return res;
    }

    void dfs(vector<vector<int>>& res, vector<int>& nums, int* visited, vector<int> s){
        if(s.size() == nums.size()){
            res.push_back(s);
            return;
        }
        for(int i = 0; i < nums.size(); ++i){
            if(i > 0 && nums[i] == nums[i - 1] && !visited[i - 1])
                continue;
            if(visited[i] == 1)
                continue;
            visited[i] = 1;
            s.push_back(nums[i]);
            dfs(res, nums, visited, s);
            s.pop_back();
            visited[i] = 0;
        }
    }
};