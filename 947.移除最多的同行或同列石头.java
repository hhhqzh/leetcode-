class Solution {
    public int removeStones(int[][] stones) {
        if(stones.length == 0)
            return 0;
        UnionFind unionFind = new UnionFind();
        for(int[] stone : stones) {
            unionFind.union(stone[0] + 10001, stone[1]);
        }
        return stones.length - unionFind.getCount();
    }

    private class UnionFind {
        private Map<Integer, Integer> parent;
        private int count; // 记录连通分量数

        public UnionFind() {
            this.parent = new HashMap<>();
            this.count = 0;
        }

        public int getCount() {
            return this.count;
        }

        public int find(int x) {
            if(!parent.containsKey(x)) {
                parent.put(x, x);
                ++count;
            }

            if (x != parent.get(x)) {
                parent.put(x, find(parent.get(x)));
            }
            return parent.get(x);
        }

        public void union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            if(rootX == rootY)
                return;
            parent.put(rootX, rootY);
            --count;
        }

    }
}