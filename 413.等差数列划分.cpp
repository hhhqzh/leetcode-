class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& A) {
        if(A.size() <= 2)
            return 0;
        int n = A.size();

        // int* dp = new int[n]();
        // for(int i = 2; i < n; ++i){
        //     if(A[i] - A[i - 1] == A[i - 1] - A[i - 2])
        //         dp[i] = dp[i - 1] + 1;
        // }
        // int total = 0;
        // for(int i = 0; i < n; ++i)
        //     total += dp[i];

        int add = 0;
        int total = 0;
        for(int i = 2; i < n; ++i){
            if(A[i] - A[i - 1] == A[i - 1] - A[i - 2])
                total += ++add;
            else
                add = 0;
        }

        return total;
    }
};