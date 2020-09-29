/* 不持股可以由这两个状态转换而来：

    昨天不持股，今天什么都不操作，仍然不持股；
    昨天持股，今天卖了一股。

持股可以由这两个状态转换而来：

    昨天持股，今天什么都不操作，仍然持股；
    昨天处在冷冻期，今天买了一股；

处在冷冻期只可以由不持股转换而来，因为题目中说，刚刚把股票卖了，需要冷冻 1 天。
*/
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