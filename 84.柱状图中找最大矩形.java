class Solution {
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