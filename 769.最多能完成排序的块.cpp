//  一个区间内最大的数字，应该不大于这个区间最右边的index，如果大于区间最右边的index
// 则这个区间无法划分。因此从左向右遍历，如果判断到当前区间的最大值与当前索引相等
// 则该区间可以划分


class Solution {
public:
    int maxChunksToSorted(vector<int>& arr) {
        if(arr.size() == 0)
            return 0;
        int res = 0;
        int right = arr[0];
        for(int i = 0; i < arr.size(); ++i){
            right = max(right, arr[i]);
            if(right == i)
                ++res;
        }
        return res;
    }
};