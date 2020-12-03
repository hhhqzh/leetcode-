// 用正常去遍历会超时
// 使用 "厄拉多塞筛法"
//  0,1不是质数，2是质数把2的所有倍数全部划掉、3是第二个质数把3的倍数划掉
class Solution {
    public int countPrimes(int n) {
        // true为合数，false为质数
        boolean[] isPrime = new boolean[n];
        int count = 0;
        for(int i = 2; i < Math.sqrt(n); ++i){
            if(!isPrime[i]){
                for(int j = i * i; j < n; j += i)
                    isPrime[j] = true;
            }
        }
        for(int i = 2; i < n; ++i)
            if(!isPrime[i])
                ++count;
        return count;
    }
}v