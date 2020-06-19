class Solution {
public:
    vector<int> constructArray(int n, int k) {
        vector<int> res(n);
        res[0] = 1;
        for(int i = 1, t = k; i <= k; ++i, --t){
            res[i] = i % 2 == 1? res[i - 1] + t: res[i - 1] - t;
        }
        for(int i = k + 1; i < n; ++i){
            res[i] = i + 1;
        }
        return res;
    }
};