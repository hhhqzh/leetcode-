class Solution {
public:
    // 用int i*i+j*j会溢出
    bool judgeSquareSum(int c) {
        int i = 0, j = sqrt(c);
        int flag = 0;
        while(i <= j){
            if(i * i - c + j * j == 0){
                flag = 1;
                break;
            }
            else if (i * i - c + j * j > 0)
                --j;
            else
                ++i;
        }
        return flag;
    }
};