class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        //暴力
        vector<int> res;
         // for (int i = 0; i < nums.size();i++){
         //    for(int j = i + 1;j < nums.size();j++){
         //        if (nums[j] == target - nums[i]){
         //            res.push_back(i);
         //            res.push_back(j);
         //        }
         //    }
         // }
        // return res;
        unordered_map<int, int> m;
		for (int i = 0; i < nums.size(); i++)
		{
			if (m.find(target - nums[i]) != m.end()){
                res.push_back(m[target - nums[i]]);
                res.push_back(i);
                break;
            }
			m[nums[i]] = i;
		}
		return res;
    }
};