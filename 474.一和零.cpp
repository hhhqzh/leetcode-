#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main(){
    vector<string> strs = {"10","0001","111001","1","0"};
    int m = 5, n = 3;
    if(strs.size() == 0)
        return 0;
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    for(string str: strs){
        int zero = 0, one = 0;
        for(int i = 0; i < str.length(); ++i){
            if(str[i] == '0')
                ++zero;
            else
                ++one;
        }
        for(int i = m; i >= zero; --i){
            for(int j = n; j >= one; --j){
                dp[i][j] = max(dp[i][j], dp[i - zero][j - one] + 1);
            }
        }
    }
    cout<<dp[m][n]<<endl;
    return 0;
}