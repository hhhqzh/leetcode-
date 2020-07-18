// 由于 xxx 平方根的整数部分 ans\textit{ans}ans 是满足 k2≤xk^2 \leq xk2≤x 的最大 kkk 值，因此我们可以对 kkk 进行二分查找

class Solution {
public:
    int mySqrt(int x) {
        if(x <= 1)
            return x;
        int l = 1, h = x;
        while(l <= h){
            int mid = l + (h - l) / 2;
            int sqrt = x / mid;
            if(sqrt == mid)
                return mid;
            else if(sqrt > mid)
                l = mid + 1;
            else
                h = mid - 1;
        }
        return h;
    }
};