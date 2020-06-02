class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        if(!n)
            return 0;
        if(n == 1)
            return nums[0];
        int *money = new int[n];
        money[0] = nums[0];
        money[1] = nums[1];
        int max = money[0] > money[1] ? money[0] : money[1];
        for(int i=2; i<n; ++i){
            money[i] = 0;
            for(int j=i-2; j>=0; --j){
                if(money[i] < nums[i] + money[j])
                    money[i] = nums[i] + money[j];
            }
            if(money[i] > max)
                max = money[i];
        }
        return max;
    }