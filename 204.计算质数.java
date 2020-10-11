// 用正常去遍历会超时
// 使用 "厄拉多塞筛法" 
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