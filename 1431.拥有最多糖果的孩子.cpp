class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        vector<bool> res;
        auto max_ptr = max_element(candies.begin(), candies.end());
        int max = *max_ptr;
        for(auto i: candies)
            res.push_back(i + extraCandies >= max);
        return res;
    }
};