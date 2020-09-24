// dp[i] = min(dp[i],dp[i-coin]+1)
//如果i-coin存在的话.

class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        if(amount == 0)
            return 0;
        int* dp = new int[amount + 1]();
        for(int coin: coins){
            for(int i = coin; i <= amount; ++i){
                if(i == coin)
                    dp[i] = 1;
                else if (dp[i - coin] != 0){
                    if(dp[i] == 0)
                        dp[i] = dp[i - coin] + 1;
                    else
                        dp[i] = min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        return dp[amount] == 0? -1: dp[amount];
    }
};