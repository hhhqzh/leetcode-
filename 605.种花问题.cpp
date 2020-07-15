class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int len = flowerbed.size();
        for(int i = 0; i < len; ++i){
            if(flowerbed[i] == 1)
                continue;
            int pre = 0, next = 0;
            if(i != 0)
                pre = flowerbed[i - 1];
            if(i != len - 1)
                next = flowerbed[i + 1];
            if(pre == 0 && next == 0){
                flowerbed[i] = 1;
                --n;
            }
        }
        return n <= 0;
    }
};