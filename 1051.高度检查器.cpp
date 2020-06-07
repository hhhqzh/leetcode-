class Solution {
public:
    // 利用桶排序记录每个数字出现的个数，按顺序与原数组相比，比较不相同的数字个数。
    //  也可以先排序在比较，但是时间复杂度比较高
    int heightChecker(vector<int>& heights) {
        vector<int> copy(heights);
        sort(copy.begin(), copy.end());
        int count = 0;
        for(int i=0; i<heights.size(); i++){
            if(heights[i] != copy[i])
                ++count;
        }
        return count;
    }
};