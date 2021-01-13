class Solution {
    public int[] findRedundantConnection(int[][] edges) {
        int n = edges.length;
        int[] parent = new int[n + 1];
        for(int i = 1; i <= n; ++i)
            parent[i] = i;
        int[] res = new int[2];
        for(int i = 0; i < n; ++i){
            int[] edge = edges[i];
            int node1 = edge[0], node2 = edge[1];
            if(find(parent, node1) != find(parent, node2)) {
                union(parent, node1, node2);
            } else {
                res = edge;
            }
        }
        return res;
    }

    public void union(int[] parent, int index1, int index2) {
        parent[find(parent, index1)] = index2;
    }

    public int find(int[] parent, int index) {
        while(parent[index] != index)
            index = parent[index];
        return parent[index];
    }
}