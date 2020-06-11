class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        // unordered_map<int, int> m;
        // int res = 0;
        // for(auto num : nums){
        //     if(m[num] == 0){
        //         int left = m[num - 1];
        //         int right = m[num + 1];
        //         //该点的区间长度值为其左右相邻数的区间长度值＋1
        //         m[num] = left + right + 1;
        //         res = max(res , m[num]);
        //         // 更新两端点的区间长度值
        //         m[num - left] = m[num];
        //         m[num + right] = m[num];
        //     }
        // }
        // return res;

        // 把数插入set消除重复元素
        // 遍历每一个数num，查询num, num+1, .... , y 的个数curCount
        // 如果num-1存在于set中，则跳过，因为包含num的最长长度与包含num-1的最长长度一样
        // 比较res与curCount的大小
        set<int> s;
        int res = 0;
        for(auto num : nums)
            s.insert(num);
        for(auto num : nums){
            if(s.find(num - 1) == s.end()){
                int curCount = 1;
                int curNum = num;
                while(s.find(curNum + 1) != s.end()){
                    ++curCount;
                    ++curNum;
                }
                res = max(res , curCount);
            }
        }
        return res;
    }
};