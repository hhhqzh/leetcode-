class Solution {
public:
    vector<int> diffWaysToCompute(string input) {
        vector<int> res;
        for(int i = 0; i < input.length(); ++i){
            char c = input[i];
            if(c == '+' || c == '-' || c == '*'){
                // 分成left和right两部分
                vector<int> res1 = diffWaysToCompute(input.substr(0, i));
                vector<int> res2 = diffWaysToCompute(input.substr(i + 1));
                
                // 通过运算符c计算left c right
                for(auto r1 : res1){
                    for(auto r2 : res2){
                        if(c == '+')
                            res.push_back(r1 + r2);
                        else if(c == '-')
                            res.push_back(r1 - r2);
                        else if(c == '*')
                            res.push_back(r1 * r2);
                    }
                }
            }
        }
        // 表达式中全是数字，没有符号
        if(res.empty())
            res.push_back(std::stoi(input));
        return res;
    }
};