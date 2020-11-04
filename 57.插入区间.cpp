// c++超 8%的蠢代码，思路是正确的
class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        intervals.push_back(newInterval);
        if(intervals.size() == 1)
            return intervals;
        sort(intervals.begin(), intervals.end());
        int left = INT_MAX, right = 0;
        for(int i = 1; i < intervals.size(); ++i){
            if(intervals[i - 1][1] >= intervals[i][0] || right >= intervals[i][0]){
                left  = min(left, intervals[i - 1][0]);
                right = max(max(right, intervals[i][1]), intervals[i - 1][1]);
            }
        }
        vector<vector<int>> res;
        int flag = 0;
        for(auto interval : intervals){
            if(interval[0] >= left && interval[1] <= right){
                if(!flag){
                    res.push_back({left, right});
                    flag = 1;
                }
            } else 
                res.push_back(interval);
        }
        return res;
    }
};

// 题解
class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        int left = newInterval[0];
        int right = newInterval[1];
        bool placed = false;
        vector<vector<int>> ans;
        for (const auto& interval: intervals) {
            if (interval[0] > right) {
                // 在插入区间的右侧且无交集
                if (!placed) {
                    ans.push_back({left, right});
                    placed = true;                    
                }
                ans.push_back(interval);
            }
            else if (interval[1] < left) {
                // 在插入区间的左侧且无交集
                ans.push_back(interval);
            }
            else {
                // 与插入区间有交集，计算它们的并集
                left = min(left, interval[0]);
                right = max(right, interval[1]);
            }
        }
        if (!placed) {
            ans.push_back({left, right});
        }
        return ans;
    }
};

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/insert-interval/solution/cha-ru-qu-jian-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。