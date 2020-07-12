class Solution {
public:
    int maxArea(vector<int>& height) {
        int i = 0, j = height.size() - 1;
        int res = 0;
        while(i < j){
            int h = min(height[i], height[j]);
            res = max(res, h * (j - i));
            if(height[i] > height[j])
                --j;
            else
                ++i;
        }
        return res;
    }
};