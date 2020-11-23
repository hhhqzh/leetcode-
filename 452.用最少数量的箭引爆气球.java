class Solution {
    public int findMinArrowShots(int[][] points) {
        if(points.length == 0)
            return 0;
        Arrays.sort(points, new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                if (o1[0]==o2[0]) return Integer.compare(o1[1], o2[1]);
                return Integer.compare(o1[0], o2[0]);
            }
        });
        int count = 1;
        int end = points[0][1];
        for(int i = 0; i < points.length - 1; ++i){
            if(points[i + 1][0] <= end){
                if(points[i + 1][1] < end)
                    end = points[i + 1][1];
            } else {
                ++count;
                end = points[i + 1][1];
            }
        }
        return count;
    }
}