// class Solution {
// public:
//     vector<int> topKFrequent(vector<int>& nums, int k) {
//         map<int, int> m;
//         for(int i = 0; i < nums.size(); ++i)
//             ++m[nums[i]];
//         vector<vector<int>> res(nums.size() + 1);
//         for(auto t: m){
//             int temp = t.second;
//             res[temp].push_back(t.first);
//         }
//         vector<int> r;
//         for(int i = nums.size(); i >= 0 && r.size() < k; --i){
//             if(res[i].size() == 0)
//                 continue;
//             if(res[i].size() <= k - r.size()){
//                 for(int j = 0; j < res[i].size(); ++j){
//                     r.push_back(res[i][j]);
//                 }
//             } else {
//                 int l = 0;
//                 for(int j = res[i].size() - 1; l < k - r.size(); --j, ++k){
//                     r.push_back(res[i][j]);
//                 }
//             }
//         }
//         return r;
//     }
// };


// 用最小堆
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int,int> map;
        for(int i : nums) map[i] ++; //遍历
        priority_queue< pair<int,int>, vector< pair<int,int> >, greater< pair<int,int> > > q; //最小堆
        for(auto it : map) 
            if(q.size() == k) { //队列满了
                if(it.second > q.top().first) { //堆排
                    q.pop();
                    q.push(make_pair(it.second, it.first));
                }
            }
            else q.push(make_pair(it.second, it.first));
        vector<int> res;
        while(q.size()) { //将优先队列中k个高频元素存入vector
            res.push_back(q.top().second);
            q.pop();
        }
        return res;
    }
};