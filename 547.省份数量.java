// dfs
class Solution {
    public int findCircleNum(int[][] isConnected) {
        if(isConnected.length == 0)
            return 0;
        int res = 0;
        for(int i = 0; i < isConnected.length; ++i){
            if(isConnected[i][i] == 1){
                dfs(isConnected, i);
                ++res;
            }
        }
        return res;
    }

    public void dfs(int[][] isConnected, int i){
        isConnected[i][i] = 0;
        for(int j = 0; j < isConnected.length; ++j){
            if(isConnected[j][j] == 1 && isConnected[i][j] == 1)
                dfs(isConnected, j);
        }
    }
}

// bfs
class Solution {
    public int findCircleNum(int[][] isConnected) {
        if(isConnected.length == 0)
            return 0;
        int res = 0;
        Queue<Integer> queue = new LinkedList<Integer>();
        for(int i = 0; i < isConnected.length; ++i){
            if(isConnected[i][i] == 1){
                queue.offer(i);
                while(!queue.isEmpty()){
                    int j = queue.poll();
                    isConnected[j][j] = 0;
                    for(int k = 0; k < isConnected.length; ++k){
                        if(isConnected[j][k] == 1 && isConnected[k][k] == 1)
                            queue.offer(k);
                    }
                }
                ++res;
            }
        }
        return res;
    }
}