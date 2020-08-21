// 超过5%的垃圾回溯。。。
class Solution {
public:
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        vector<vector<int>> res;
        vector<int> temp;
        set<vector<int>> ss;
        for(int size = 0; size <= nums.size(); ++size){
            dfs(0, size, temp, ss, nums);
        }
        set<vector<int>>::iterator it;
        for(it = ss.begin (); it != ss.end(); ++it)
            res.push_back(*it);
        return res;
    }

    void dfs(int cur, int size, vector<int> temp, set<vector<int>>& ss, vector<int> nums){
        if(size == temp.size()){
            sort(temp.begin(), temp.end());
            ss.insert(temp);
            return;
        }
        for(int i = cur; i < nums.size(); ++i){
            temp.push_back(nums[i]);
            dfs(i + 1, size, temp, ss, nums);
            temp.pop_back();
        }
    }
};

//力扣神人题解
class Solution {
public:
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        vector<vector<int>> res;
        vector<int> temp;
        sort(nums.begin(), nums.end());
        res.push_back(temp);
        int right = 1, left = 0, len = 0;
        for(int i = 0; i < nums.size(); ++i){
            if(i != 0 && nums[i] == nums[i - 1])
                left = res.size() - len;
            else
                left = 0;
            right = res.size();
            len = right - left;
            for(int j = left; j < right; ++j){
                temp = res[j];
                temp.push_back(nums[i]);
                res.push_back(temp);
            }
        }
        return res;
    }
};