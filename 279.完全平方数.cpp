
// 动态规划
// 定义一个函数f(n)表示我们要求的解。f(n)的求解过程为：
// f(n) = 1 + min{
//   f(n-1^2), f(n-2^2), f(n-3^2), f(n-4^2), ... , f(n-k^2) //(k为满足k*k<=n的最大的k)
// }


class Solution {
public:
    int numSquares(int n) {
        vector<int> val(n + 1, INT_MAX);
        if(n <= 1)
            return n;
        val[0] = 0;
        val[1] = 1;
        for(int i = 2; i <= n; ++i){
            for(int j = 1; j * j <= i; ++j)
                val[i] = min(val[i], val[i - j * j] + 1);
        }
        return val[n];
    }
};

// BFS
// 可以将每个整数看成图中的一个节点，如果两个整数之差为一个平方数，那么这两个整数所在的节点就有一条边。
// 要求解最小的平方数数量，就是求解从节点 n 到节点 0 的最短路径。
class Solution {
public:
    int numSquares(int n) {
        // BFS
        queue<int> q;
        int* marked = new int[n + 1];
        q.push(n);
        marked[n] = 1;
        int level = 0;
        while(!q.empty()){
            ++level;
            int size = q.size();
            while(size-- > 0){
                int current = q.front();
                q.pop();
                for(int i = 1; i * i <= current; ++i){
                    int next = current - i * i;
                    if(next == 0)
                        return level;
                    if(marked[next] == 1)
                        continue;
                    marked[next] = 1;
                    q.push(next);
                }
            }
        }
        return level;
    }
};
