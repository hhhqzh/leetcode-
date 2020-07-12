class Solution {
public:
    string frequencySort(string s) {
        map<char, int> m;
        for(int i = 0; i < s.length(); ++i)
            ++m[s[i]];
        vector<vector<char>> temp(s.length() + 1);
        for(auto t: m)
            temp[t.second].push_back(t.first);
        string str = "";
        for(int i = s.length(); i > 0; --i){
            if(temp[i].size() == 0)
                continue;
            for(int j = 0; j < temp[i].size(); ++j){
                int k = i;
                while(k--)
                    str += temp[i][j];
            }
        }
        return str;
    }
};