class Solution {
public:
    int change(int amount, vector<int>& coins) {
        if(coins.size() == 0){
            if(amount == 0)
                return 1;
            return 0;
        }
        int* dp = new int[amount + 1]();
        dp[0] = 1;
        for(auto coin: coins){
            for(int i = coin; i <= amount; ++i){
                dp[i] += dp[i - coin];
            }
        }
        return dp[amount];
    }
};