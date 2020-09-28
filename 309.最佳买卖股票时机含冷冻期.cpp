class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if(prices.size() == 0)
            return 0;
        int n =  prices.size();
        // 第i天卖出时最大收益
        int* sell = new int[n]();
        // 第i天买进时最大收益
        int* buy = new int[n]();
        buy[0] = -prices[0];
        // 第i天为冷冻期的最大收益
        int* cool = new int[n]();
        for(int i = 1; i < n; ++i){
            sell[i] = buy[i - 1] + prices[i];
            buy[i] = max(buy[i - 1], cool[i - 1] - prices[i]);
            cool[i] = max(sell[i - 1], cool[i - 1]);
        }
        return max(sell[n - 1], cool[n - 1]);
    }
};