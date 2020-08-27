// BFS，时间复杂度过高

class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        queue<string> q;
        q.push(beginWord);
        int n = wordList.size();
        int res = 0;
        while(!q.empty()){
            ++res;
            int size = q.size();
            while(size--){
                string s = q.front();
                if(s == endWord)
                    return res;
                q.pop();
                for(int i = 0; i < n; ++i){
                    if(wordList[i] == "" || s.length() != wordList[i].length())
                        continue;
                    int diff = 0;
                    for(int j = 0; j < s.length(); ++j){
                        if(s[j] != wordList[i][j]) ++diff;
                        if(diff >1) break;
                    }
                    if(diff <= 1){
                        q.push(wordList[i]);
                        wordList[i] = "";
                    }
                }
            }
        }
        return 0;
    }
};

// 使用双向BFS