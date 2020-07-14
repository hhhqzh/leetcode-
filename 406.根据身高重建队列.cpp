bool cmp(vector<int>& a, vector<int>& b){
    return a[0] == b[0]? a[1] < b[1]: b[0] < a[0];
}

class Solution {
public:
    vector<vector<int>> reconstructQueue(vector<vector<int>>& people) {
        vector<vector<int>> res;
        if(people.size() == 0)
            return res;
        sort(people.begin(), people.end(), cmp);
        for(auto p : people){
            res.insert(res.begin() + p[1], p);
        }
        return res;
    }
};