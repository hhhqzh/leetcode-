class Solution {
public:
    int maxProfit(vector<int>& prices, int fee) {
        int n = prices.size();
        if(n == 0)
            return 0;
        int* buy = new int[n]();
        int* sell = new int[n]();
        buy[0] = -prices[0];
        for(int i = 1; i < n; ++i){
            buy[i] = max(buy[i - 1], sell[i - 1] - prices[i]);
            sell[i] = max(sell[i - 1], buy[i - 1] + prices[i] - fee);
        }
        return sell[n - 1];
    }
};


// 官方题解
// sell可以保持不变，或者将手上的股票卖出
// buy可以保持不变，或者将这一天的股票买入

/*  在这里可以不需要临时变量来保存sell，简单来说就是当天卖出后不可能再次买入（亏了一笔手续费）
    Math.max(buy, sell - prices[i]); 我们就只看公式，不看其他的
    sell 有两种可能性要么等于sell，要么等于buy + prices[i] - fee；
    buy 有两种可能性要么等于buy,要么等于sell - prices[i]；
    sell如果等于sell，那么本身值就没有发生变化，所以对下面的计算也就没有影响.
    sell如果等于buy + prices[i] - fee，我们将sell带入buy公式里面。
    buy = Math.max(buy, buy + prices[i] - fee - prices[i]);==>buy = Math.max(buy, buy - fee);
    可以看到买入当天+ prices[i]跟卖出当天- prices[i]正好抵消了，只剩下buy-fee了，而buy-fee是肯定小于buy的，也就是说buy没有变化.
    而一天最多只能有一个状态的最大利润会发生变化(买入buy会变，卖出sell会变，不买不卖sell跟buy都不变)
    综上结论：如果sell值不变，那么对buy的计算就不会有影响，而如果sell值变了，通过上面带入公式可知，buy最大值会取自身。
*/
int sell = 0, buy = -prices[0];
    for(int i = 1; i < n; ++i){
        sell = max(sell, buy + prices[i] - fee);
        buy = max(buy, sell - prices[i]);
    }
    return sell;