class Solution {
public:
    // 周边延伸决策问题 BFS
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        if(grid[0][0] == 1)
            return -1;
        // 8个方向
        vector<vector<int>> dir = {{0,1}, {0,-1}, {1,0}, {-1,0}, {1,1}, {1,-1}, {-1,1}, {-1,-1}};
        int n = grid.size();
        // 队列
        queue<pair<int, int>> q;
        // 把左上角的入口进队列
        q.push(make_pair(0, 0));
        // 设置为已走过
        grid[0][0] = 1;
        int res = 1;
        while(!q.empty()){
            int size = q.size();
            while(size--){
                int x = q.front().first;
                int y = q.front().second;
                q.pop();
                // 找到出口
                if(x == n - 1 && y == n - 1)
                    return res;
                for(int i = 0; i < 8; ++i){
                    int x1 = x + dir[i][0];
                    int y1 = y + dir[i][1];
                    // 如果越界或者堵塞
                    if(x1 < 0 || y1 < 0 || x1 >= n || y1 >= n || grid[x1][y1])
                        continue;
                    q.push(make_pair(x1, y1));
                    grid[x1][y1] = 1;
                }
            }
            ++res;
        }
        // 右下角出口堵塞的情况
        return -1;
    }
};