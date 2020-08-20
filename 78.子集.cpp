// 回溯
class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> res;
        vector<int> temp;
        for(int size = 0; size <= nums.size(); ++size)
            dfs(0, size, nums, temp, res);
        return res;
    }
    void dfs(int start, int size, vector<int>& nums, vector<int> temp, vector<vector<int>>& res){
        if(size == temp.size()){
            res.push_back(temp);
            return;
        }
        for(int i = start; i < nums.size(); ++i){
            temp.push_back(nums[i]);
            dfs(i + 1, size, nums, temp, res);
            temp.pop_back();
        }
    }
};

/**
 *  力扣大佬的题解
 * 从前往后遍历
 * 遇到一个子集就把当前数加入该子集成为一个新的子集，再插入集合中
 * 最后再把该数作为一个集合插入集合中
 **/
vector<vector<int>> subsets(vector<int>& nums){
        vector<vector<int>> res;
        for(int i = 0; i < nums.size(); ++i){
            vector<int> temp;
            int size = res.size();
            for(int j = 0; j < size; ++j){
                temp = res[j];
                temp.push_back(nums[i]);
                res.push_back(temp);
            }
            temp.clear();
            temp.push_back(nums[i]);
            res.push_back(temp);
        }
        res.push_back({});
        return res;
    }