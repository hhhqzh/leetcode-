class Solution {
public:
    //是子序列不是子数组！！！
    //用unordered_map记录每一个数出现的次数，数i只能和数i-1和数i+1组成和谐数组
    //找出map[i-1]+map[i]和map[i]和map[i+1]的最大值
    int findLHS(vector<int>& nums) {
        unordered_map<int, int> m;
        int Max = 0;
        for(auto i: nums){
            ++m[i];
            if(m[i-1]){
                Max = max(Max, m[i] + m[i-1]);
            }
            if(m[i+1]){
                Max = max(Max, m[i] + m[i+1]);
            }
        }
        return Max;
    }
};