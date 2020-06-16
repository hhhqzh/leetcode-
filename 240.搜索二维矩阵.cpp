class Solution {
public:
//左下角的元素是这一行中最小的元素，同时又是这一列中最大的元素。比较左下角元素和目标
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if(matrix.size() == 0 || matrix[0].size() == 0)
            return false;
        int r = matrix.size(), c = matrix[0].size();
        int row = 0, col = c - 1;
        while(row < r && col >= 0){
            if(target == matrix[row][col])
                return true;
            else if (target < matrix[row][col])
                --col;
            else
                ++row;
        }
        return false;
    }
};