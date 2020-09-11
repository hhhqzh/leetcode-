class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if(prices.size() == 0)
            return 0;
        int max = 0, minPrice=prices[0];
        for(int i=1;i<prices.size();i++){
            if((prices[i] - minPrice) > max)
                max = prices[i] - minPrice;
            if(prices[i] < minPrice)
                minPrice = prices[i];
        }
        return max;
    }
};