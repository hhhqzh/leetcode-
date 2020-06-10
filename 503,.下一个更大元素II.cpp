class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        // 循环nums两次，栈内存放着元素的小标
        // 判断栈顶元素与当前元素的大小
        //      若栈顶元素<当前元素，记录栈顶元素的下一个更大元素为当前元素，弹出栈顶元素
        //      若栈顶元素>当前元素，且在第一遍循环，当前元素入栈
        int n = nums.size();
        vector<int> res(n, -1);
        stack<int> s;
        for(int i=0; i<2*n; ++i){
            int num = nums[i%n];
            while(!s.empty() && nums[s.top()] < num){
                res[s.top()] = num;
                s.pop();
            }
            if(i<n)
                s.push(i);
        }
        return res;
    }
};