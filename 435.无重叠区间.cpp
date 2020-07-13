bool cmp(vector<int> &a , vector<int> &b){
   return a[1]<b[1] || (a[1]==b[1] && a[0]<b[0]);
}

class Solution {
public:
    // 先计算最多能组成的不重叠区间个数，然后用区间总个数减去不重叠区间的个数。
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        if(intervals.size() <= 1)
            return 0;
        sort(intervals.begin(),intervals.end(), cmp);
        int end = intervals[0][1];
        int count = 1;
        for(int i = 1; i < intervals.size(); ++i){
            if(intervals[i][0] >= end){
                ++count;
                end = intervals[i][1];
            }
        }
        return intervals.size() - count;
    }
};