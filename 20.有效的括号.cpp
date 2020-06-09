class Solution {
public:
    bool isValid(string s) {
        if(s=="")  
            return true;
        stack<char> st;
        st.push(s[0]);
        for(int i=1; i<s.length(); ++i){
            if(s[i] == '(' || s[i] == '{' || s[i] == '[')
                st.push(s[i]);
            if(s[i] == ')'){
                if(st.empty() || st.top()!='(')
                    return false;
                st.pop();
            }
            if(s[i] == '}'){
                if(st.empty() || st.top()!='{')
                    return false;
                st.pop();
            }
            if(s[i] == ']'){
                if(st.empty() || st.top()!='[')
                    return false;
                st.pop();
            }
        }
        if(st.empty())
            return true;
        return false;
    }
};