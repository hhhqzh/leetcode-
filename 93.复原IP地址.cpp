class Solution {
public:
    vector<string> restoreIpAddresses(string s) {
        vector<string> res;
        if(s.length() == 0)
            return res;
        string str = "";
        dfs(0, res, str, s);
        return res;
    }

    void dfs(int k, vector<string>& res, string str, string s){
        if(k == 4 || s.length() == 0){
            if(k == 4 && s.length() == 0)
                res.push_back(str);
            return;
        }
        // ip地址每一段最多三个
        for(int i = 0; i < s.length() && i <= 2; ++i){
            if(i != 0 && s[0] == '0')
                break;
            string temp = s.substr(0, i + 1);
            if(std::stoi(temp) <= 255){
                if(str.length() != 0)
                    temp = '.' + temp;
                int len = str.length();
                str += temp;
                dfs(k + 1, res, str, s.substr(i + 1));
                str = str.substr(0, len);
            } else 
                break;
        }
    }
};