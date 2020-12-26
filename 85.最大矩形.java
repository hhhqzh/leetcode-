
// 把每一行都看成一个柱形图，遍历84题的算法
class Solution {
    public int maximalRectangle(char[][] matrix) {
        if (matrix.length == 0 || matrix[0].length == 0) {
            return 0;
        }
        int row = matrix.length;
        int col = matrix[0].length;
        int[] heights = new int[col];
        int res = 0;
        for(int i = 0; i < row; ++i){
            for(int j = 0; j < col; ++j){
                if(matrix[i][j] == '1')
                    heights[j] += 1;
                else
                    heights[j] = 0;
            }
            res = Math.max(res, largestRectangleArea(heights));
        }
        return res;
    }

    public int largestRectangleArea(int[] heights) {
        int n = heights.length;
        int area = 0;
        for(int i = 0; i < n; ++i){
            int w = 1;
            int j = i - 1;
            while(j >= 0 && heights[j] >= heights[i]){
                --j;
                ++w;
            }
            j = i + 1;
            while(j < n && heights[j] >= heights[i]){
                ++j;
                ++w;
            }
            area = Math.max(area, heights[i] * w);
        }
        return area;
    }
}