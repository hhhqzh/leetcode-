class MyStack {
public:
    queue<int> q;

    /** Initialize your data structure here. */
    MyStack() {

    }
    
    /** Push element x onto stack. */
    void push(int x) {
        q.push(x);
    }
    
    /** Removes the element on top of the stack and returns that element. */
    int pop() {
        queue<int> q1;
        while(q.size() > 1){
            q1.push(q.front());
            q.pop();
        }
        int t = q.front();
        q = q1;
        return t;
    }
    
    /** Get the top element. */
    int top() {
        queue<int> q1;
        while(q.size() > 1){
            q1.push(q.front());
            q.pop();
        }
        int t = q.front();
        q1.push(q.front());
        q = q1;
        return t;
    }
    
    /** Returns whether the stack is empty. */
    bool empty() {
        return q.empty();
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */