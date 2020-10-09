//将n分解为m个数字的乘积，且m个数字的和最小。

// dp
class Solution {
    public int minSteps(int n) {
        // if(n == 0 || n == 1)
        //     return 0;
        int []dp = new int[n + 1];
        for(int i = 2; i <= n ; ++i){
            // 质数的话，结果为本身，因为只能一个一个粘贴
            // 先把每个数都看成质数
            dp[i] = i;
            
            // 处理合数
            for(int j = 2; j <= Math.sqrt(n); ++j){
                if(i % j == 0){
                    // 为合数，结果为因式分解的结果
                    dp[i] = dp[j] + dp[i / j];
                    break;
                }
            }
        }
        return dp[n];
    }
}

class Solution {
    public int minSteps(int n) {        
        if(n <= 1)
         return 0;
        int res = 0;
        for(int i = 2; i <= n; ++i){
            while(n % i == 0){
                res += i;
                n /= i;
            }
        }
        return res;
    }
}