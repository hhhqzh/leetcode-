class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& T) {
        int n = T.size();
        vector<int> res(n);
        // stack<int> indexStack;
        // for(int i=0; i < n; ++i){
        //    while(!indexStack.empty() && T[i] > T[indexStack.top()]){
        //        int preIndex = indexStack.top();
        //        indexStack.pop();
        //        res[preIndex] = i - preIndex;
        //    } 
        //    indexStack.push(i);
        // }
        // return res;


        // 从后往前推，最后一天的结果直接为0，
        // 在看倒数第二天，如果温度比最后一天第，则结果为1，如果比最后一天搞，又因为UI后一天结果为0，则结果为0
        // 要求第i天的结果，需要知道第i+1天的结果。
        res[n-1] = 0;
        for(int i = n-2; i >= 0; --i){
            for(int j = i+1; j < n; j+=res[j]){
                if(T[i] < T[j]){
                    res[i] = j - i;
                    break;
                } else if(res[j] == 0){
                    res[i] = 0;
                    break;
                }

            }
        }
        return res;
    }
};