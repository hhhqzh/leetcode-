class Solution {
public:
    vector<int> partitionLabels(string S) {
        int len = S.length();
        vector<int> res;
        if(len == 0)
            return res;
        map<char, int> m;
        int i;
        for(i = 0; i < len; ++i)
            m[S[i]] = i;
        i = 0;
        while(i < len){
            int index = m[S[i]];
            for(int j = i + 1; j < index && j < len; ++j){
                if(m[S[j]] > index)
                    index = m[S[j]];
            }
            res.push_back(index - i + 1);
            i = index + 1;
        }
        return res;
    }
};