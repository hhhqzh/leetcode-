// 用正常去遍历会超时
// 使用 "厄拉多塞筛法" 
class Solution {
    public int countPrimes(int n) {
        int []isPrime = new int[n];
        for(int i = 0; i < n; ++i)
            isPrime[i] = 1;
        int count = 0;
        for(int i = 2; i < n; ++i){
            if(isPrime[i] == 1){
                ++count;
                for(int j = 2 * i; j < n; j += i)
                    isPrime[j] = 0;
            }
        }
        return count;
    }
}